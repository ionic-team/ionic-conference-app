import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { ActionSheetController } from '@ionic/angular';

import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { BtbPage } from './btb';
import { ConferenceData } from '../../providers/conference-data';

const confDataSub = {};

describe('BtbPage', () => {
  let fixture, app;
  beforeEach(waitForAsync(() => {
    const actionSheetSpy = jasmine.createSpyObj('ActionSheetController', [
      'create'
    ]);
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
    const iabSpy = jasmine.createSpyObj('InAppBrowser', ['create']);

    TestBed.configureTestingModule({
      declarations: [BtbPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: ActionSheetController, useValue: actionSheetSpy },
        { provide: InAppBrowser, useValue: iabSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ConferenceData, useValue: confDataSub }
      ]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(BtbPage);
    app = fixture.debugElement.componentInstance;
  });
  it('should create the btb page', () => {
    expect(app).toBeTruthy();
  });
});
