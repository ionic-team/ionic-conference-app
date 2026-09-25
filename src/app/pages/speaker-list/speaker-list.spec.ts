import {
  CUSTOM_ELEMENTS_SCHEMA,
  provideZonelessChangeDetection,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouteReuseStrategy, Router } from '@angular/router';
import { ActionSheetController, IonicRouteStrategy, provideIonicAngular } from '@ionic/angular';

import { ConferenceService } from '../../providers/conference.service';
import { SpeakerListPage } from './speaker-list';

const confDataSub = {};

describe('SpeakerListPage', () => {
  let fixture, app: SpeakerListPage;
  beforeEach(async () => {
    const actionSheetSpy = jasmine.createSpyObj('ActionSheetController', [
      'create',
    ]);
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

    await TestBed.configureTestingModule({
      declarations: [],
      imports: [SpeakerListPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        provideZonelessChangeDetection(),
        provideIonicAngular({ useSetInputAPI: true }),
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        { provide: ActionSheetController, useValue: actionSheetSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ConferenceService, useValue: confDataSub },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SpeakerListPage);
    app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create the speaker list page', () => {
    expect(app).toBeTruthy();
  });
});
