import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { firstValueFrom } from 'rxjs';
import type { Mock } from 'vitest';

import { checkTutorialGuard } from './check-tutorial.guard';

describe('checkTutorialGuard', () => {
  let routerSpy: { navigate: Mock };

  beforeEach(async () => {
    await Preferences.clear();
    routerSpy = {
      navigate: vi.fn().mockName('Router.navigate'),
    };
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), { provide: Router, useValue: routerSpy }],
    });
  });

  const runGuard = () => firstValueFrom(TestBed.runInInjectionContext(() => checkTutorialGuard()));

  it('should allow the tutorial route when the tutorial was not done', async () => {
    expect(await runGuard()).toBe(true);
    expect(routerSpy.navigate).not.toHaveBeenCalled();
  });

  it('should redirect to the schedule when the tutorial was already done', async () => {
    await Preferences.set({ key: 'ion_did_tutorial', value: 'true' });

    expect(await runGuard()).toBe(false);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/app', 'tabs', 'schedule']);
  });
});
