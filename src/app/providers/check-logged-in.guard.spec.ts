import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import type { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { provideRouter, Router, UrlTree } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

import { checkLoggedInGuard } from './check-logged-in.guard';
import { UserService } from './user.service';

describe('checkLoggedInGuard', () => {
  beforeEach(async () => {
    await Preferences.clear();
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), provideRouter([])],
    });
  });

  const runGuard = () =>
    TestBed.runInInjectionContext(() => checkLoggedInGuard({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot));

  it('should redirect to the login page while logged out', async () => {
    const result = await runGuard();

    expect(result).toBeInstanceOf(UrlTree);
    expect(TestBed.inject(Router).serializeUrl(result as UrlTree)).toBe('/login');
  });

  it('should allow the route while logged in', async () => {
    await TestBed.inject(UserService).login('ionitron');

    expect(await runGuard()).toBe(true);
  });

  it('should redirect to the login page after logging out', async () => {
    const user = TestBed.inject(UserService);
    await user.login('ionitron');
    await user.logout();

    expect(await runGuard()).toBeInstanceOf(UrlTree);
  });
});
