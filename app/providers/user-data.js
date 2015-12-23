import {Injectable} from 'angular2/core';
import {Storage, LocalStorage} from 'ionic/ionic';


@Injectable()
export class UserData {
  HAS_LOGGED_IN: string = 'hasLoggedIn';

  constructor() {
    this._favorites = [];
    this.storage = new Storage(LocalStorage);
  }

  hasFavorite(sessionName) {
    return (this._favorites.indexOf(sessionName) > -1);
  }

  addFavorite(sessionName) {
    this._favorites.push(sessionName);
  }

  removeFavorite(sessionName) {
    let index = this._favorites.indexOf(sessionName)
    if (index > -1) {
      this._favorites.splice(index, 1);
    }
  }

  login(username, password) {
    this.storage.set(this.HAS_LOGGED_IN, true);
  }

  signup(username, password) {
    this.storage.set(this.HAS_LOGGED_IN, true);
  }

  logout() {
    this.storage.remove(this.HAS_LOGGED_IN);
  }

  // return a promise
  hasLoggedIn() {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value;
    });
  }
}
