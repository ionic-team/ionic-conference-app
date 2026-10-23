import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Preferences } from '@capacitor/preferences';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    await Preferences.clear();
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(UserService);
  });

  it('should not be logged in when nothing is stored', async () => {
    expect(await service.isLoggedIn()).toBe(false);
    expect(await service.getUsername()).toBeNull();
  });

  it('should persist the login state and username in Preferences', async () => {
    await service.login('Bob');

    expect(await service.isLoggedIn()).toBe(true);
    expect(await service.getUsername()).toBe('Bob');
    expect((await Preferences.get({ key: 'hasLoggedIn' })).value).toBe('true');
    expect((await Preferences.get({ key: 'username' })).value).toBe('Bob');
  });

  it('should clear the login state and username on logout', async () => {
    await service.signup('Alice');
    await service.logout();

    expect(await service.isLoggedIn()).toBe(false);
    expect(await service.getUsername()).toBeNull();
  });
});
