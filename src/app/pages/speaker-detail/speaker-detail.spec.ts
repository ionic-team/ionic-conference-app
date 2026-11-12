import { CUSTOM_ELEMENTS_SCHEMA, provideZonelessChangeDetection } from '@angular/core';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import type { ActionSheetButton } from '@ionic/angular';
import { ActionSheetController, provideIonicAngular } from '@ionic/angular';
import { of } from 'rxjs';

import conferenceData from '../../../assets/data/data.json';
import type { ConferenceData, Speaker } from '../../interfaces/conference.interfaces';
import { ConferenceService } from '../../providers/conference.service';

import { SpeakerDetailPage } from './speaker-detail';

describe('SpeakerDetailPage', () => {
  let fixture: ComponentFixture<SpeakerDetailPage>;
  let app: SpeakerDetailPage;
  let actionSheet: { present: ReturnType<typeof vi.fn> };
  let actionSheetCtrl: { create: ReturnType<typeof vi.fn> };

  const createPage = async (speakerId: string) => {
    actionSheet = { present: vi.fn().mockResolvedValue(undefined) };
    actionSheetCtrl = { create: vi.fn().mockResolvedValue(actionSheet) };

    await TestBed.configureTestingModule({
      imports: [SpeakerDetailPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        provideZonelessChangeDetection(),
        provideIonicAngular({ useSetInputAPI: true }),
        { provide: ConferenceService, useValue: { load: () => of(structuredClone(conferenceData) as ConferenceData) } },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: convertToParamMap({ speakerId }) } } },
      ],
    })
      // The page provides its own ActionSheetController, so replace it there.
      .overrideComponent(SpeakerDetailPage, {
        set: { providers: [{ provide: ActionSheetController, useValue: actionSheetCtrl }] },
      })
      .compileComponents();

    fixture = TestBed.createComponent(SpeakerDetailPage);
    app = fixture.componentInstance;
    fixture.detectChanges();
  };

  const actionSheetOptions = () => actionSheetCtrl.create.mock.calls[0][0];
  const actionSheetButton = (text: string) =>
    (actionSheetOptions().buttons as ActionSheetButton[]).find((button) => button.text === text);

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should show the speaker from the route', async () => {
    await createPage('12');

    app.ionViewWillEnter();
    await fixture.whenStable();

    const element: HTMLElement = fixture.nativeElement;
    expect(app.speaker()?.name).toBe('Rachel Rabbit');
    expect(element.querySelector('h2')?.textContent).toBe('Rachel Rabbit');
    expect(element.querySelector('.speaker-detail p')?.textContent).toContain('Rachel is a Rabbit.');
  });

  it('should show a placeholder for an unknown speaker', async () => {
    await createPage('999');

    app.ionViewWillEnter();
    await fixture.whenStable();

    expect(app.speaker()).toBeUndefined();
    expect(fixture.nativeElement.querySelector('h2')?.textContent).toBe('Loading...');
  });

  it('should offer to email or call the speaker', async () => {
    await createPage('12');
    app.ionViewWillEnter();
    const speaker = app.speaker() as Speaker;
    const open = vi.spyOn(window, 'open').mockReturnValue(null);

    await app.openContact(speaker);

    expect(actionSheetOptions().header).toBe('Contact Rachel Rabbit');
    expect(actionSheet.present).toHaveBeenCalled();

    (actionSheetButton(`Email ( ${speaker.email} )`)?.handler as () => void)();
    expect(open).toHaveBeenLastCalledWith(`mailto:${speaker.email}`);

    (actionSheetButton(`Call ( ${speaker.phone} )`)?.handler as () => void)();
    expect(open).toHaveBeenLastCalledWith(`tel:${speaker.phone}`);
    expect(actionSheetButton('Cancel')?.role).toBe('cancel');
  });

  it('should offer to share the speaker', async () => {
    await createPage('12');
    app.ionViewWillEnter();

    await app.openSpeakerShare(app.speaker() as Speaker);

    expect(actionSheetOptions().header).toBe('Share Rachel Rabbit');
    expect((actionSheetOptions().buttons as ActionSheetButton[]).map((button) => button.text)).toEqual([
      'Copy Link',
      'Share via ...',
      'Cancel',
    ]);
    expect(actionSheet.present).toHaveBeenCalled();
  });

  it('should open social links in a new tab', async () => {
    await createPage('12');
    const open = vi.spyOn(window, 'open').mockReturnValue(null);

    app.openExternalUrl('https://twitter.com/ionicframework');

    expect(open).toHaveBeenCalledWith('https://twitter.com/ionicframework', '_blank');
  });
});
