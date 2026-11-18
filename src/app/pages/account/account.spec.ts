import { CUSTOM_ELEMENTS_SCHEMA, provideZonelessChangeDetection } from '@angular/core';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import type { AlertButton, AlertInput } from '@ionic/angular';
import { AlertController, provideIonicAngular } from '@ionic/angular';

import { UserService } from '../../providers/user.service';

import { AccountPage } from './account';

describe('AccountPage', () => {
  let fixture: ComponentFixture<AccountPage>;
  let app: AccountPage;
  let router: { navigateByUrl: ReturnType<typeof vi.fn> };
  let user: {
    getUsername: ReturnType<typeof vi.fn>;
    setUsername: ReturnType<typeof vi.fn>;
    logout: ReturnType<typeof vi.fn>;
  };
  let alert: { present: ReturnType<typeof vi.fn> };
  let alertCtrl: { create: ReturnType<typeof vi.fn> };

  const createPage = async (username: string | null) => {
    router = { navigateByUrl: vi.fn().mockResolvedValue(true) };
    user = {
      getUsername: vi.fn().mockResolvedValue(username),
      setUsername: vi.fn().mockResolvedValue(undefined),
      logout: vi.fn().mockResolvedValue(undefined),
    };
    alert = { present: vi.fn().mockResolvedValue(undefined) };
    alertCtrl = { create: vi.fn().mockResolvedValue(alert) };

    await TestBed.configureTestingModule({
      imports: [AccountPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        provideZonelessChangeDetection(),
        provideIonicAngular({ useSetInputAPI: true }),
        { provide: Router, useValue: router },
        { provide: UserService, useValue: user },
      ],
    })
      // The page provides its own AlertController, so replace it there.
      .overrideComponent(AccountPage, { set: { providers: [{ provide: AlertController, useValue: alertCtrl }] } })
      .compileComponents();

    fixture = TestBed.createComponent(AccountPage);
    app = fixture.componentInstance;
    fixture.detectChanges();
    // Wait for the page to read the username, then for the view to show it.
    await user.getUsername.mock.results[0]?.value;
    await fixture.whenStable();
  };

  const shownUsername = () => fixture.nativeElement.querySelector('h2')?.textContent;

  it('should show the username', async () => {
    await createPage('ionitron');

    expect(app.username()).toBe('ionitron');
    expect(shownUsername()).toBe('ionitron');
  });

  it('should show nothing when there is no username', async () => {
    await createPage(null);

    expect(app.username()).toBe('');
    expect(fixture.nativeElement.querySelector('ion-list')).toBeNull();
  });

  it('should change the username from the alert', async () => {
    await createPage('ionitron');

    await app.changeUsername();

    const options = alertCtrl.create.mock.calls[0][0];
    expect(options.header).toBe('Change Username');
    expect((options.inputs as AlertInput[])[0]).toEqual(
      expect.objectContaining({ name: 'username', value: 'ionitron' }),
    );
    expect(alert.present).toHaveBeenCalled();

    user.getUsername.mockResolvedValue('ionic-fan');
    const ok = (options.buttons as (AlertButton | string)[]).find(
      (button): button is AlertButton => typeof button !== 'string' && button.text === 'Ok',
    );
    (ok?.handler as (data: { username: string }) => void)({ username: 'ionic-fan' });

    expect(user.setUsername).toHaveBeenCalledWith('ionic-fan');
    await vi.waitFor(() => expect(app.username()).toBe('ionic-fan'));
    await fixture.whenStable();
    expect(shownUsername()).toBe('ionic-fan');
  });

  it('should log out and open the login page', async () => {
    await createPage('ionitron');

    app.logout();

    expect(user.logout).toHaveBeenCalled();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/login');
  });

  it('should open the support page', async () => {
    await createPage('ionitron');

    app.support();

    expect(router.navigateByUrl).toHaveBeenCalledWith('/support');
  });
});
