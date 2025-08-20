import { provideHttpClientTesting } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, importProvidersFrom } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { MenuController, provideIonicAngular } from '@ionic/angular/standalone';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { UserService } from './providers/user.service';

describe('AppComponent', () => {
  let menuSpy, userDataSpy, swUpdateSpy, app, fixture;

  beforeEach(async () => {
    menuSpy = jasmine.createSpyObj('MenuController', ['toggle', 'enable']);
    userDataSpy = jasmine.createSpyObj('UserService', ['isLoggedIn', 'logout']);
    userDataSpy.isLoggedIn.and.returnValue(Promise.resolve(false));
    swUpdateSpy = jasmine.createSpyObj('SwUpdate', [
      'available',
      'activateUpdate',
    ]);
    swUpdateSpy.versionUpdates = {
      subscribe: jasmine.createSpy('subscribe').and.returnValue({ unsubscribe: () => {} })
    };

    await TestBed.configureTestingModule({
      imports: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        provideIonicAngular(),
        provideRouter(routes),
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
    app.storage.create();
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });
});
