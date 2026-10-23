import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { Preferences } from '@capacitor/preferences';
import { MenuController, provideIonicAngular } from '@ionic/angular';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { UserService } from './providers/user.service';

describe('AppComponent', () => {
  let menuSpy, userDataSpy, swUpdateSpy, app: AppComponent, fixture;

  beforeEach(async () => {
    await Preferences.clear();
    menuSpy = jasmine.createSpyObj('MenuController', ['toggle', 'enable']);
    userDataSpy = jasmine.createSpyObj('UserService', ['isLoggedIn', 'logout']);
    userDataSpy.isLoggedIn.and.returnValue(Promise.resolve(false));
    swUpdateSpy = jasmine.createSpyObj('SwUpdate', ['available', 'activateUpdate']);
    swUpdateSpy.versionUpdates = {
      subscribe: jasmine.createSpy('subscribe').and.returnValue({ unsubscribe: () => {} }),
    };

    await TestBed.configureTestingModule({
      imports: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        provideZonelessChangeDetection(),
        provideIonicAngular({ useSetInputAPI: true }),
        provideRouter(routes),
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: MenuController, useValue: menuSpy },
        { provide: UserService, useValue: userDataSpy },
        { provide: SwUpdate, useValue: swUpdateSpy },
      ],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should reset the tutorial flag when opening the tutorial', async () => {
    await Preferences.set({ key: 'ion_did_tutorial', value: 'true' });

    app.openTutorial();

    expect((await Preferences.get({ key: 'ion_did_tutorial' })).value).toBe('false');
  });
});
