import { CUSTOM_ELEMENTS_SCHEMA, provideZonelessChangeDetection } from '@angular/core';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { provideIonicAngular } from '@ionic/angular';
import { of } from 'rxjs';

import conferenceData from '../../../assets/data/data.json';
import type { ConferenceData } from '../../interfaces/conference.interfaces';
import { ConferenceService } from '../../providers/conference.service';
import { UserService } from '../../providers/user.service';

import { SessionDetailPage } from './session-detail';

describe('SessionDetailPage', () => {
  let fixture: ComponentFixture<SessionDetailPage>;
  let app: SessionDetailPage;
  let user: UserService;

  const createPage = async (sessionId: string) => {
    await TestBed.configureTestingModule({
      imports: [SessionDetailPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        provideZonelessChangeDetection(),
        provideIonicAngular({ useSetInputAPI: true }),
        { provide: ConferenceService, useValue: { load: () => of(structuredClone(conferenceData) as ConferenceData) } },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: convertToParamMap({ sessionId }) } } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SessionDetailPage);
    app = fixture.componentInstance;
    user = TestBed.inject(UserService);
    fixture.detectChanges();
  };

  const starIcon = () => fixture.nativeElement.querySelector('ion-buttons[slot="end"] ion-icon')?.getAttribute('name');
  // Ionic moves an ion-button's aria-label onto the native button inside its shadow root.
  const favoriteLabel = () =>
    fixture.nativeElement
      .querySelector('ion-buttons[slot="end"] ion-button')
      ?.shadowRoot?.querySelector('button')
      ?.getAttribute('aria-label');

  it('should show the session from the route', async () => {
    await createPage('2');

    app.ionViewWillEnter();
    await fixture.whenStable();

    const element: HTMLElement = fixture.nativeElement;
    expect(app.session()?.name).toBe('Getting Started with Ionic');
    expect(element.querySelector('h1')?.textContent).toBe('Getting Started with Ionic');
    expect(element.querySelector('.session-track-ionic')?.textContent).toBe('Ionic');
    expect(element.querySelector('ion-text')?.textContent).toContain('9:30 am – 9:45 am');
    expect(element.querySelector('ion-text')?.textContent).toContain('Hall 2');
  });

  it('should show nothing for an unknown session', async () => {
    await createPage('999');

    app.ionViewWillEnter();
    await fixture.whenStable();

    expect(app.session()).toBeUndefined();
    expect(fixture.nativeElement.querySelector('h1')).toBeNull();
  });

  it('should show whether the session is a favorite', async () => {
    await createPage('3');
    user.addFavorite('Ionic Tooling');

    app.ionViewWillEnter();
    await fixture.whenStable();

    expect(app.isFavorite()).toBe(true);
    expect(starIcon()).toBe('star');
  });

  it('should add and remove the session as a favorite', async () => {
    await createPage('3');
    app.ionViewWillEnter();
    await fixture.whenStable();
    expect(starIcon()).toBe('star-outline');

    app.toggleFavorite();
    await fixture.whenStable();

    expect(user.hasFavorite('Ionic Tooling')).toBe(true);
    expect(starIcon()).toBe('star');

    app.toggleFavorite();
    await fixture.whenStable();

    expect(user.hasFavorite('Ionic Tooling')).toBe(false);
    expect(starIcon()).toBe('star-outline');
  });

  it('should label the favorite button by what tapping it does', async () => {
    await createPage('3');
    app.ionViewWillEnter();
    await fixture.whenStable();

    await vi.waitFor(() => expect(favoriteLabel()).toBe('Add favorite'));

    app.toggleFavorite();
    await fixture.whenStable();
    await vi.waitFor(() => expect(favoriteLabel()).toBe('Remove favorite'));

    app.toggleFavorite();
    await fixture.whenStable();
    await vi.waitFor(() => expect(favoriteLabel()).toBe('Add favorite'));
  });

  it('should not change favorites before a session is shown', async () => {
    await createPage('999');

    app.toggleFavorite();

    expect(user.favorites).toEqual([]);
    expect(app.isFavorite()).toBe(false);
  });

  it('should go back to the schedule by default', async () => {
    await createPage('2');

    app.ionViewDidEnter();

    expect(app.defaultHref()).toBe('/app/tabs/schedule');
  });
});
