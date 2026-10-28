import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, importProvidersFrom, provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { MenuController, provideIonicAngular } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { UserService } from './providers/user.service';

describe('AppComponent', () => {
  let menuSpy, userDataSpy, swUpdateSpy, app: AppComponent, fixture;

  beforeEach(async () => {
    menuSpy = {
      toggle: vi.fn().mockName('MenuController.toggle'),
      enable: vi.fn().mockName('MenuController.enable'),
    };
    userDataSpy = {
      isLoggedIn: vi.fn().mockName('UserService.isLoggedIn'),
      logout: vi.fn().mockName('UserService.logout'),
    };
    userDataSpy.isLoggedIn.mockResolvedValue(false);
    swUpdateSpy = {
      available: vi.fn().mockName('SwUpdate.available'),
      activateUpdate: vi.fn().mockName('SwUpdate.activateUpdate'),
      versionUpdates: {
        subscribe: vi
          .fn()
          .mockName('subscribe')
          .mockReturnValue({ unsubscribe: () => {} }),
      },
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
        importProvidersFrom(IonicStorageModule.forRoot()),
        { provide: MenuController, useValue: menuSpy },
        { provide: UserService, useValue: userDataSpy },
        { provide: SwUpdate, useValue: swUpdateSpy },
      ],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    app['storage'].create();
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });
});
