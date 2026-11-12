import { CUSTOM_ELEMENTS_SCHEMA, provideZonelessChangeDetection } from '@angular/core';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import type { AlertButton, IonItemSliding } from '@ionic/angular';
import { IonRouterOutlet, provideIonicAngular } from '@ionic/angular';
import { of } from 'rxjs';

import type { ScheduleDay, Session } from '../../interfaces/conference.interfaces';
import { ConferenceService } from '../../providers/conference.service';
import { UserService } from '../../providers/user.service';
import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';

import { SchedulePage } from './schedule';

const session = (id: string, name: string, hide = false): Session => ({
  id,
  name,
  hide,
  location: 'Hall 1',
  timeStart: '9:00 am',
  timeEnd: '9:30 am',
  tracks: ['Ionic'],
  speakerNames: [],
});

const day: ScheduleDay = {
  date: '2047-05-17',
  shownSessions: 2,
  groups: [
    { time: '9:00 am', sessions: [session('1', 'Keynote'), session('2', 'Hidden talk', true)] },
    { time: '10:00 am', sessions: [session('3', 'Workshop')] },
    { time: '11:00 am', sessions: [session('4', 'Filtered out', true)], hide: true },
  ],
};

describe('SchedulePage', () => {
  let fixture: ComponentFixture<SchedulePage>;
  let app: SchedulePage;
  let confService: { getTimeline: ReturnType<typeof vi.fn> };
  let user: UserService;
  let slidingItem: { close: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    confService = { getTimeline: vi.fn().mockReturnValue(of(day)) };
    slidingItem = { close: vi.fn() };

    await TestBed.configureTestingModule({
      imports: [SchedulePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        provideZonelessChangeDetection(),
        provideIonicAngular({ useSetInputAPI: true }),
        provideRouter([]),
        { provide: ConferenceService, useValue: confService },
        { provide: IonRouterOutlet, useValue: { nativeEl: document.createElement('div') } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SchedulePage);
    app = fixture.componentInstance;
    user = TestBed.inject(UserService);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  // Returns the alert the page created, with its buttons.
  const mockAlert = () => {
    const alert = { present: vi.fn().mockResolvedValue(undefined) };
    const create = vi.spyOn(app.alertCtrl, 'create').mockResolvedValue(alert as unknown as HTMLIonAlertElement);
    return {
      alert,
      create,
      button: (text: string) =>
        (create.mock.calls[0][0]?.buttons as AlertButton[]).find((button) => button.text === text),
    };
  };

  it('should load the whole timeline on init', () => {
    expect(confService.getTimeline).toHaveBeenCalledWith(0, '', [], 'all');
    expect(app.shownSessions()).toBe(2);
    expect(app.groups().map((group) => group.time)).toEqual(['9:00 am', '10:00 am', '11:00 am']);
  });

  it('should render the shown sessions grouped by time', () => {
    const element: HTMLElement = fixture.nativeElement;
    const shownGroups = [...element.querySelectorAll('ion-item-group:not([hidden])')];

    expect(shownGroups.map((group) => group.querySelector('ion-label')?.textContent?.trim())).toEqual([
      '9:00 am',
      '10:00 am',
    ]);
    expect([...element.querySelectorAll('ion-item-sliding:not([hidden]) h3')].map((name) => name.textContent)).toEqual([
      'Keynote',
      'Workshop',
    ]);
    expect(element.querySelector('ion-list-header')?.hasAttribute('hidden')).toBe(true);
  });

  it('should show the empty state when no session is shown', async () => {
    confService.getTimeline.mockReturnValue(of({ ...day, shownSessions: 0 }));

    app.updateSchedule();
    await fixture.whenStable();

    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('ion-list')?.hasAttribute('hidden')).toBe(true);
    expect(element.querySelector('ion-list-header')?.hasAttribute('hidden')).toBe(false);
    expect(element.querySelector('ion-list-header')?.textContent?.trim()).toBe('No Sessions Found');
  });

  it('should reload the timeline with the current search text, excluded tracks and segment', () => {
    app.queryText = 'ionic';
    app.excludeTrackNames = ['Angular'];
    app.segment = 'favorites';

    app.updateSchedule();

    expect(confService.getTimeline).toHaveBeenLastCalledWith(0, 'ionic', ['Angular'], 'favorites');
  });

  it('should hand out a new groups array on every update so the view re-renders', () => {
    const before = app.groups();

    app.updateSchedule();

    expect(app.groups()).not.toBe(before);
    expect(app.groups()).toEqual(before);
  });

  describe('presentFilter', () => {
    const mockModal = (data: string[] | undefined) => {
      const modal = {
        present: vi.fn().mockResolvedValue(undefined),
        onWillDismiss: vi.fn().mockResolvedValue({ data }),
      };
      const create = vi.spyOn(app.modalCtrl, 'create').mockResolvedValue(modal as unknown as HTMLIonModalElement);
      return { modal, create };
    };

    it('should open the filter with the excluded tracks', async () => {
      app.excludeTrackNames = ['Food'];
      const { modal, create } = mockModal(undefined);

      await app.presentFilter();

      expect(create).toHaveBeenCalledWith(
        expect.objectContaining({ component: ScheduleFilterPage, componentProps: { excludedTracks: ['Food'] } }),
      );
      expect(modal.present).toHaveBeenCalled();
    });

    it('should reload the timeline with the tracks the filter excluded', async () => {
      mockModal(['Angular', 'Food']);

      await app.presentFilter();

      expect(app.excludeTrackNames).toEqual(['Angular', 'Food']);
      expect(confService.getTimeline).toHaveBeenLastCalledWith(0, '', ['Angular', 'Food'], 'all');
    });

    it('should keep the filter when the modal is dismissed without data', async () => {
      app.excludeTrackNames = ['Food'];
      mockModal(undefined);
      confService.getTimeline.mockClear();

      await app.presentFilter();

      expect(app.excludeTrackNames).toEqual(['Food']);
      expect(confService.getTimeline).not.toHaveBeenCalled();
    });
  });

  describe('favorites', () => {
    it('should add a session as a favorite and confirm it with a toast', async () => {
      const toast = { present: vi.fn().mockResolvedValue(undefined) };
      const createToast = vi.spyOn(app.toastCtrl, 'create').mockResolvedValue(toast as unknown as HTMLIonToastElement);

      await app.addFavorite(slidingItem as unknown as IonItemSliding, session('1', 'Keynote'));

      expect(user.hasFavorite('Keynote')).toBe(true);
      expect(slidingItem.close).toHaveBeenCalled();
      expect(createToast).toHaveBeenCalledWith(
        expect.objectContaining({ header: 'Keynote was successfully added as a favorite.' }),
      );
      expect(toast.present).toHaveBeenCalled();
    });

    it('should offer to remove a session that is already a favorite', async () => {
      user.addFavorite('Keynote');
      const { alert, create } = mockAlert();

      await app.addFavorite(slidingItem as unknown as IonItemSliding, session('1', 'Keynote'));

      expect(create).toHaveBeenCalledWith(expect.objectContaining({ header: 'Favorite already added' }));
      expect(alert.present).toHaveBeenCalled();
      expect(user.favorites).toEqual(['Keynote']);
    });

    it('should remove the favorite and reload the timeline when Remove is chosen', async () => {
      user.addFavorite('Keynote');
      const { button } = mockAlert();
      confService.getTimeline.mockClear();

      await app.removeFavorite(slidingItem as unknown as IonItemSliding, session('1', 'Keynote'), 'Remove Favorite');
      (button('Remove')?.handler as () => void)();

      expect(user.hasFavorite('Keynote')).toBe(false);
      expect(confService.getTimeline).toHaveBeenCalled();
      expect(slidingItem.close).toHaveBeenCalled();
    });

    it('should keep the favorite when Cancel is chosen', async () => {
      user.addFavorite('Keynote');
      const { create, button } = mockAlert();

      await app.removeFavorite(slidingItem as unknown as IonItemSliding, session('1', 'Keynote'), 'Remove Favorite');
      (button('Cancel')?.handler as () => void)();

      expect(create).toHaveBeenCalledWith(expect.objectContaining({ header: 'Remove Favorite' }));
      expect(user.hasFavorite('Keynote')).toBe(true);
      expect(slidingItem.close).toHaveBeenCalled();
    });
  });
});
