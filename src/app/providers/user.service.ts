import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  favorites: string[] = [];
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';

  hasFavorite(sessionName: string): boolean {
    return this.favorites.indexOf(sessionName) > -1;
  }

  addFavorite(sessionName: string): void {
    this.favorites.push(sessionName);
  }

  removeFavorite(sessionName: string): void {
    const index = this.favorites.indexOf(sessionName);
    if (index > -1) {
      this.favorites.splice(index, 1);
    }
  }

  login(username: string): Promise<boolean> {
    return Preferences.set({ key: this.HAS_LOGGED_IN, value: 'true' }).then(() => {
      this.setUsername(username);
      return window.dispatchEvent(new CustomEvent('user:login'));
    });
  }

  signup(username: string): Promise<boolean> {
    return Preferences.set({ key: this.HAS_LOGGED_IN, value: 'true' }).then(() => {
      this.setUsername(username);
      return window.dispatchEvent(new CustomEvent('user:signup'));
    });
  }

  logout(): Promise<void> {
    return Preferences.remove({ key: this.HAS_LOGGED_IN })
      .then(() => {
        return Preferences.remove({ key: 'username' });
      })
      .then(() => {
        window.dispatchEvent(new CustomEvent('user:logout'));
      });
  }

  setUsername(username: string): Promise<void> {
    return Preferences.set({ key: 'username', value: username });
  }

  getUsername(): Promise<string | null> {
    return Preferences.get({ key: 'username' }).then(({ value }) => {
      return value;
    });
  }

  isLoggedIn(): Promise<boolean> {
    return Preferences.get({ key: this.HAS_LOGGED_IN }).then(({ value }) => {
      return value === 'true';
    });
  }
}
