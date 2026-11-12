import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, provideZonelessChangeDetection } from '@angular/core';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { Preferences } from '@capacitor/preferences';
import { MenuController, ToastController, provideIonicAngular } from '@ionic/angular';
import type { Mock } from 'vitest';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { UserService } from './providers/user.service';

describe('AppComponent', () => {
  let menuSpy: { toggle: Mock; enable: Mock };
  let userDataSpy: { isLoggedIn: Mock; logout: Mock };
  let swUpdateSpy;
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await Preferences.clear();
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
        { provide: MenuController, useValue: menuSpy },
        { provide: UserService, useValue: userDataSpy },
        { provide: SwUpdate, useValue: swUpdateSpy },
      ],
    })
      // The component provides its own MenuController, so replace it there.
      .overrideComponent(AppComponent, {
        set: { providers: [{ provide: MenuController, useValue: menuSpy }, ToastController] },
      })
      .compileComponents();
  });

  const createApp = (): void => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  };

  // The labels of the menu items, without the list headers.
  const menuLabels = (): string[] =>
    [...(fixture.nativeElement as HTMLElement).querySelectorAll('ion-menu ion-item ion-label')].map((label) =>
      (label.textContent ?? '').trim(),
    );

  const hasDarkModeToggle = (): boolean =>
    [...(fixture.nativeElement as HTMLElement).querySelectorAll('ion-menu ion-toggle')].some(
      (toggle) => toggle.textContent?.trim() === 'Dark Mode',
    );

  describe('on start', () => {
    // Only fake setTimeout, so Angular can still render on the next animation frame.
    beforeEach(() => {
      vi.useFakeTimers({ toFake: ['setTimeout'] });
    });
    afterEach(() => {
      vi.useRealTimers();
    });

    // The menu shows the saved login state 300 ms after the app starts.
    const start = async (loggedIn: boolean): Promise<void> => {
      userDataSpy.isLoggedIn.mockResolvedValue(loggedIn);
      createApp();
      await vi.advanceTimersByTimeAsync(300);
      await fixture.whenStable();
    };

    it('should show Login and Signup in the menu when logged out', async () => {
      await start(false);

      expect(app.loggedIn()).toBe(false);
      expect(menuLabels()).toEqual(expect.arrayContaining(['Login', 'Signup']));
      expect(menuLabels()).not.toContain('Account');
      expect(menuLabels()).not.toContain('Logout');
    });

    it('should restore a saved login', async () => {
      await start(true);

      expect(app.loggedIn()).toBe(true);
      expect(menuLabels()).toEqual(expect.arrayContaining(['Account', 'Logout']));
      expect(menuLabels()).not.toContain('Login');
      expect(menuLabels()).not.toContain('Signup');
    });

    it('should show the Dark Mode toggle when logged out', async () => {
      await start(false);

      expect(menuLabels()).toContain('Login');
      expect(hasDarkModeToggle()).toBe(true);
    });
  });

  describe('once started', () => {
    beforeEach(() => {
      createApp();
    });

    it('should create the app', () => {
      expect(app).toBeTruthy();
    });

    it('should reset the tutorial flag when opening the tutorial', async () => {
      await Preferences.set({ key: 'ion_did_tutorial', value: 'true' });

      app.openTutorial();

      expect((await Preferences.get({ key: 'ion_did_tutorial' })).value).toBe('false');
    });

    it('should list the conference pages in the menu', () => {
      expect(menuLabels()).toEqual(
        expect.arrayContaining(['Schedule', 'Speakers', 'Map', 'About', 'Support', 'Show Tutorial']),
      );
    });

    it.each(['user:login', 'user:signup'])('should show Account and Logout in the menu after %s', async (event) => {
      window.dispatchEvent(new CustomEvent(event));

      await vi.waitFor(() => expect(app.loggedIn()).toBe(true));
      await fixture.whenStable();
      expect(menuLabels()).toEqual(expect.arrayContaining(['Account', 'Logout']));
      expect(menuLabels()).not.toContain('Login');
      expect(menuLabels()).not.toContain('Signup');
    });

    it('should show the logged-out menu again after user:logout', async () => {
      window.dispatchEvent(new CustomEvent('user:login'));
      await vi.waitFor(() => expect(app.loggedIn()).toBe(true));

      window.dispatchEvent(new CustomEvent('user:logout'));

      await vi.waitFor(() => expect(app.loggedIn()).toBe(false));
    });

    it('should log out and open the schedule', async () => {
      userDataSpy.logout.mockResolvedValue(undefined);
      const navigate = vi.spyOn(TestBed.inject(Router), 'navigateByUrl').mockResolvedValue(true);

      app.logout();

      expect(userDataSpy.logout).toHaveBeenCalled();
      await vi.waitFor(() => expect(navigate).toHaveBeenCalledWith('/app/tabs/schedule'));
    });

    it('should disable the menu and open the tutorial', () => {
      const navigate = vi.spyOn(TestBed.inject(Router), 'navigateByUrl').mockResolvedValue(true);

      app.openTutorial();

      expect(menuSpy.enable).toHaveBeenCalledWith(false);
      expect(navigate).toHaveBeenCalledWith('/tutorial');
    });

    it('should toggle the dark palette on the document', () => {
      const root = document.documentElement;

      app.dark = true;
      app.toggleDarkMode();
      expect(root.classList.contains('ion-palette-dark')).toBe(true);

      app.dark = false;
      app.toggleDarkMode();
      expect(root.classList.contains('ion-palette-dark')).toBe(false);
    });
  });
});
