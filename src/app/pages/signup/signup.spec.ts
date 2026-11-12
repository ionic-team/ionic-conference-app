import { CUSTOM_ELEMENTS_SCHEMA, provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import type { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { provideIonicAngular } from '@ionic/angular';

import { UserService } from '../../providers/user.service';

import { SignupPage } from './signup';

describe('SignupPage', () => {
  let app: SignupPage;
  let router: { navigateByUrl: ReturnType<typeof vi.fn> };
  let user: { signup: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    router = { navigateByUrl: vi.fn().mockResolvedValue(true) };
    user = { signup: vi.fn().mockResolvedValue(true) };

    await TestBed.configureTestingModule({
      imports: [SignupPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        provideZonelessChangeDetection(),
        provideIonicAngular({ useSetInputAPI: true }),
        { provide: Router, useValue: router },
        { provide: UserService, useValue: user },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(SignupPage);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should sign up with the username and open the schedule', () => {
    app.signup = { username: 'newbie', password: 'secret' };

    app.onSignup({ valid: true } as NgForm);

    expect(app.submitted).toBe(true);
    expect(user.signup).toHaveBeenCalledWith('newbie');
    expect(router.navigateByUrl).toHaveBeenCalledWith('/app/tabs/schedule');
  });

  it('should not sign up when the form is invalid', () => {
    const markAllAsTouched = vi.fn();

    app.onSignup({ valid: false, control: { markAllAsTouched } } as unknown as NgForm);

    expect(app.submitted).toBe(true);
    expect(markAllAsTouched).toHaveBeenCalled();
    expect(user.signup).not.toHaveBeenCalled();
    expect(router.navigateByUrl).not.toHaveBeenCalled();
  });
});
