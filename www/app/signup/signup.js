import {IonicApp, Page, NavController} from 'ionic/ionic';
import {TabsPage} from '../tabs/tabs';
import {SignupForm} from './signup-form';
import {UserData} from '../providers/user-data';

@Page({
  templateUrl: 'app/signup/signup.html',
  directives: [SignupForm]
})
export class SignupPage {
  constructor(app: IonicApp, nav: NavController, userData: UserData) {
    this.app = app;
    this.nav = nav;
    this.userData = userData;
  }

  signupFormSubmittedHandler(userData) {
    this._signup(userData.username, userData.password);
    this.nav.push(TabsPage);
  }

  private _signup(username, password) {
    this.userData.signup(username, password);

    let menuList = this.app.getComponent('menu-list');
    menuList.updateMenuItems(true);
  }
}
