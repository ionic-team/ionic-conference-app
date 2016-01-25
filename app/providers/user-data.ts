import {Injectable} from 'angular2/core';
import {Storage, LocalStorage, Events} from 'ionic-framework/ionic';


@Injectable()
export class UserData {
  _favorites = [];
  HAS_LOGGED_IN: string = 'hasLoggedIn';

  constructor(private events: Events) {
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

  login() {
    //this.storage.set(this.HAS_LOGGED_IN, true);
    this.events.publish('user:login');
  }

  signup() {
    //this.storage.set(this.HAS_LOGGED_IN, true);
    this.events.publish('user:signup');
  }

  logout() {
    //this.storage.remove(this.HAS_LOGGED_IN);
    this.events.publish('user:logout');
  }

  // return a promise
  hasLoggedIn() {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value;
    });
  }
}
