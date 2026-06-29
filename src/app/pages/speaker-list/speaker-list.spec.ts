import {
  CUSTOM_ELEMENTS_SCHEMA,
  provideZonelessChangeDetection,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouteReuseStrategy, Router } from '@angular/router';
import { ActionSheetController, IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
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
    const iabSpy = jasmine.createSpyObj('InAppBrowser', ['create']);

    await TestBed.configureTestingModule({
      declarations: [],
      imports: [SpeakerListPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        provideZonelessChangeDetection(),
        provideIonicAngular(),
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        { provide: ActionSheetController, useValue: actionSheetSpy },
        { provide: InAppBrowser, useValue: iabSpy },
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
