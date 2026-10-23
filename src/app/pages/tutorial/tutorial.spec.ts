import { CUSTOM_ELEMENTS_SCHEMA, provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { MenuController, provideIonicAngular } from '@ionic/angular';
import type { Mock } from 'vitest';

import { routes } from '../../app.routes';

import { TutorialPage } from './tutorial';

describe('TutorialPage', () => {
  let fixture, app: TutorialPage, routerSpy: { navigateByUrl: Mock };
  beforeEach(async () => {
    await Preferences.clear();
    const menuSpy = {
      toggle: vi.fn().mockName('MenuController.toggle'),
      enable: vi.fn().mockName('MenuController.enable'),
    };
    routerSpy = {
      navigateByUrl: vi.fn().mockName('Router.navigateByUrl').mockResolvedValue(true),
    };

    await TestBed.configureTestingModule({
      declarations: [],
      imports: [TutorialPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        provideZonelessChangeDetection(),
        provideIonicAngular({ useSetInputAPI: true }),
        provideRouter(routes),
        { provide: MenuController, useValue: menuSpy },
        { provide: Router, useValue: routerSpy },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialPage);
    app = fixture.debugElement.componentInstance;
  });
  it('should create the tutorial page', () => {
    expect(app).toBeTruthy();
  });

  it('should stay on the tutorial when it was not completed yet', async () => {
    app.ionViewWillEnter();
    await Preferences.get({ key: 'ion_did_tutorial' });

    expect(routerSpy.navigateByUrl).not.toHaveBeenCalled();
  });

  it('should persist the tutorial as done when starting the app', async () => {
    app.startApp();
    await routerSpy.navigateByUrl.mock.results.at(-1)?.value;

    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('/app/tabs/schedule', { replaceUrl: true });
    expect((await Preferences.get({ key: 'ion_did_tutorial' })).value).toBe('true');
  });

  it('should skip to the schedule when the tutorial was already done', async () => {
    await Preferences.set({ key: 'ion_did_tutorial', value: 'true' });

    app.ionViewWillEnter();
    await Preferences.get({ key: 'ion_did_tutorial' });

    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('/app/tabs/schedule', { replaceUrl: true });
  });
});
