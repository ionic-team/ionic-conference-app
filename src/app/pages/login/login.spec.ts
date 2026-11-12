import { CUSTOM_ELEMENTS_SCHEMA, provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import type { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { provideIonicAngular } from '@ionic/angular';

import { UserService } from '../../providers/user.service';

import { LoginPage } from './login';

describe('LoginPage', () => {
  let app: LoginPage;
  let router: { navigateByUrl: ReturnType<typeof vi.fn> };
  let user: { login: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    router = { navigateByUrl: vi.fn().mockResolvedValue(true) };
    user = { login: vi.fn().mockResolvedValue(true) };

    await TestBed.configureTestingModule({
      imports: [LoginPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        provideZonelessChangeDetection(),
        provideIonicAngular({ useSetInputAPI: true }),
        { provide: Router, useValue: router },
        { provide: UserService, useValue: user },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(LoginPage);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should log in with the username and open the schedule', () => {
    app.login = { username: 'ionitron', password: 'secret' };

    app.onLogin({ valid: true } as NgForm);

    expect(app.submitted).toBe(true);
    expect(user.login).toHaveBeenCalledWith('ionitron');
    expect(router.navigateByUrl).toHaveBeenCalledWith('/app/tabs/schedule');
  });

  it('should not log in when the form is invalid', () => {
    app.onLogin({ valid: false } as NgForm);

    expect(app.submitted).toBe(true);
    expect(user.login).not.toHaveBeenCalled();
    expect(router.navigateByUrl).not.toHaveBeenCalled();
  });

  it('should open the signup page', () => {
    app.onSignup();

    expect(router.navigateByUrl).toHaveBeenCalledWith('/signup');
  });
});
