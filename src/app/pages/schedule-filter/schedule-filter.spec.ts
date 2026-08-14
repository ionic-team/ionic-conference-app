import {
  CUSTOM_ELEMENTS_SCHEMA,
  provideZonelessChangeDetection,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalController, provideIonicAngular } from '@ionic/angular';
import { of } from 'rxjs';

import { Track } from '../../interfaces/conference.interfaces';
import { ConferenceService } from '../../providers/conference.service';
import { ScheduleFilterPage } from './schedule-filter';

const tracks: Track[] = [
  { name: 'Tooling', icon: 'hammer' },
  { name: 'Angular', icon: 'logo-angular' },
  { name: 'Documentation', icon: 'document' },
];

describe('ScheduleFilterPage', () => {
  let fixture: ComponentFixture<ScheduleFilterPage>;
  let app: ScheduleFilterPage;

  beforeEach(async () => {
    const confServiceSub = { getTracks: () => of(tracks) };

    await TestBed.configureTestingModule({
      imports: [ScheduleFilterPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        provideZonelessChangeDetection(),
        provideIonicAngular({ useSetInputAPI: true }),
        { provide: ConferenceService, useValue: confServiceSub },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ScheduleFilterPage);
    app = fixture.componentInstance;
  });

  it('should create the schedule filter page', () => {
    fixture.detectChanges();
    expect(app).toBeTruthy();
  });

  it('should uncheck the tracks named in the excludedTracks input', () => {
    fixture.componentRef.setInput('excludedTracks', ['Angular']);
    fixture.detectChanges();

    app.ionViewWillEnter();

    const byName = new Map(app.tracks().map(t => [t.name, t.isChecked]));
    expect(byName.get('Angular')).toBe(false);
    expect(byName.get('Tooling')).toBe(true);
    expect(byName.get('Documentation')).toBe(true);
  });

  it('should check every track when excludedTracks is empty', () => {
    fixture.detectChanges();

    app.ionViewWillEnter();

    expect(app.tracks().length).toBe(tracks.length);
    expect(app.tracks().every(t => t.isChecked)).toBe(true);
  });

  it('should sort tracks alphabetically by name', () => {
    fixture.detectChanges();

    app.ionViewWillEnter();

    expect(app.tracks().map(t => t.name)).toEqual([
      'Angular',
      'Documentation',
      'Tooling',
    ]);
  });

  // Presents a real modal, so this covers the componentProps wiring the tests above don't.
  // Without useSetInputAPI, Object.assign overwrites the input signal and this throws.
  it('should populate the input from componentProps when presented as a modal', async () => {
    const modalCtrl = TestBed.inject(ModalController);
    const modal = await modalCtrl.create({
      component: ScheduleFilterPage,
      componentProps: { excludedTracks: ['Angular'] },
    });
    await modal.present();

    // Let the presented page finish its first render before reading the checkboxes.
    await new Promise(resolve => setTimeout(resolve));

    const checkedFor = (name: string) =>
      modal.querySelector<HTMLIonCheckboxElement>(
        `ion-item[track="${name}"] ion-checkbox`
      )?.checked;

    expect(checkedFor('angular')).withContext('tracks rendered').toBeDefined();
    expect(checkedFor('angular')).toBe(false);
    expect(checkedFor('tooling')).toBe(true);

    await modal.dismiss();
  });
});
