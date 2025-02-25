import { CUSTOM_ELEMENTS_SCHEMA, importProvidersFrom } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { MenuController, provideIonicAngular } from '@ionic/angular/standalone';
import { IonicStorageModule } from '@ionic/storage-angular';
import { routes } from '../../app.routes';
import { TutorialPage } from './tutorial';

describe('TutorialPage', () => {
  let fixture, app;
  beforeEach(async () => {
    const menuSpy = jasmine.createSpyObj('MenuController', [
      'toggle',
      'enable',
    ]);
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

    await TestBed.configureTestingModule({
      declarations: [],
      imports: [TutorialPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        provideIonicAngular(),
        provideRouter(routes),
        importProvidersFrom(IonicStorageModule.forRoot()),
        { provide: MenuController, useValue: menuSpy },
        { provide: Router, useValue: routerSpy },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialPage);
    app = fixture.debugElement.componentInstance;
    app.storage.create();
  });
  it('should create the tutorial page', () => {
    expect(app).toBeTruthy();
  });

  it('should check the tutorial status', async () => {
    const didTuts = await app.storage.get('ion_did_tutorial');
    expect(didTuts).toBeFalsy();
  });
});
