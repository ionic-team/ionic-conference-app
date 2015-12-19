import {Injectable} from 'angular2/angular2';
import {Storage, LocalStorage} from 'ionic/ionic';

@Injectable()
export class UserData {
  private HAS_LOGGED_IN: string = 'hasLoggedIn';
  private LOGGED_IN_USERNAME: string = 'loggedInUsername';

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
    this.storage.set(this.LOGGED_IN_USERNAME, username);
  }

  signup(username, password) {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.storage.set(this.LOGGED_IN_USERNAME, username);
  }

  logout() {
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove(this.LOGGED_IN_USERNAME);
  }

  // return a promise
  hasLoggedIn() {
    return this.storage.get(this.HAS_LOGGED_IN);
  }

  // return a promise
  currentUser() {
    return this.storage.get(this.LOGGED_IN_USERNAME);
  }

}
