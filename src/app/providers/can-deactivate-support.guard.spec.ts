import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import type { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import type { AlertButton } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import type { SupportPage } from '../pages/support/support';

import { canDeactivateSupportPage } from './can-deactivate-support.guard';

describe('canDeactivateSupportPage', () => {
  let alert: { present: ReturnType<typeof vi.fn>; onDidDismiss: ReturnType<typeof vi.fn> };
  let alertCtrl: { create: ReturnType<typeof vi.fn> };

  beforeEach(() => {
    alert = { present: vi.fn().mockResolvedValue(undefined), onDidDismiss: vi.fn() };
    alertCtrl = { create: vi.fn().mockResolvedValue(alert) };
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), { provide: AlertController, useValue: alertCtrl }],
    });
  });

  const runGuard = (supportMessage: string | undefined) =>
    TestBed.runInInjectionContext(() =>
      canDeactivateSupportPage(
        { supportMessage } as SupportPage,
        {} as ActivatedRouteSnapshot,
        {} as RouterStateSnapshot,
        {} as RouterStateSnapshot,
      ),
    );

  it.each([
    ['there is no message', undefined],
    ['the message is empty', ''],
    ['the message is only whitespace', '  \n '],
  ])('should allow leaving without asking when %s', async (_, message) => {
    expect(await runGuard(message)).toBe(true);
    expect(alertCtrl.create).not.toHaveBeenCalled();
  });

  it('should ask before leaving with an unsent message', async () => {
    alert.onDidDismiss.mockResolvedValue({ role: undefined });

    await runGuard('Help!');

    expect(alertCtrl.create).toHaveBeenCalledWith(expect.objectContaining({ header: 'Leave this page?' }));
    expect(alert.present).toHaveBeenCalled();
    const buttons: AlertButton[] = alertCtrl.create.mock.calls[0][0].buttons;
    expect(buttons.map((button) => [button.text, button.role])).toEqual([
      ['Stay', 'cancel'],
      ['Leave', undefined],
    ]);
  });

  it('should stay when the alert is cancelled', async () => {
    alert.onDidDismiss.mockResolvedValue({ role: 'cancel' });

    expect(await runGuard('Help!')).toBe(false);
  });

  it('should leave when Leave is chosen', async () => {
    alert.onDidDismiss.mockResolvedValue({ role: undefined });

    expect(await runGuard('Help!')).toBe(true);
  });
});
