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

  it('should dispatch user:login after saving the login', async () => {
    let loggedInWhenDispatched: Promise<boolean> | undefined;
    const listener = vi.fn(() => {
      loggedInWhenDispatched = service.isLoggedIn();
    });
    window.addEventListener('user:login', listener);

    await service.login('Bob');

    window.removeEventListener('user:login', listener);
    expect(listener).toHaveBeenCalledTimes(1);
    expect(await loggedInWhenDispatched).toBe(true);
  });

  it('should save the username and dispatch user:signup on signup', async () => {
    const listener = vi.fn();
    window.addEventListener('user:signup', listener);

    await service.signup('Alice');

    window.removeEventListener('user:signup', listener);
    expect(listener).toHaveBeenCalledTimes(1);
    expect(await service.isLoggedIn()).toBe(true);
    expect(await service.getUsername()).toBe('Alice');
  });

  it('should dispatch user:logout after clearing the login', async () => {
    await service.login('Bob');
    const listener = vi.fn();
    window.addEventListener('user:logout', listener);

    await service.logout();

    window.removeEventListener('user:logout', listener);
    expect(listener).toHaveBeenCalledTimes(1);
    expect((await Preferences.get({ key: 'hasLoggedIn' })).value).toBeNull();
  });

  it('should change the username', async () => {
    await service.login('Bob');

    await service.setUsername('Robert');

    expect(await service.getUsername()).toBe('Robert');
  });

  describe('favorites', () => {
    it('should have no favorites at first', () => {
      expect(service.favorites).toEqual([]);
      expect(service.hasFavorite('Lunch')).toBe(false);
    });

    it('should add and remove favorites by session name', () => {
      service.addFavorite('Lunch');
      service.addFavorite('Breakfast');

      expect(service.hasFavorite('Lunch')).toBe(true);
      expect(service.hasFavorite('Breakfast')).toBe(true);

      service.removeFavorite('Lunch');

      expect(service.hasFavorite('Lunch')).toBe(false);
      expect(service.hasFavorite('Breakfast')).toBe(true);
      expect(service.favorites).toEqual(['Breakfast']);
    });

    it('should ignore removing a session that is not a favorite', () => {
      service.addFavorite('Lunch');

      service.removeFavorite('Breakfast');

      expect(service.favorites).toEqual(['Lunch']);
    });
  });
});
