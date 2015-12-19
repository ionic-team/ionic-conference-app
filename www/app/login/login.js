import {IonicApp, Page, NavController} from 'ionic/ionic';
import {TabsPage} from '../tabs/tabs';
import {SignupPage} from '../signup/signup';
import {LoginForm} from './login-form';
import {UserData} from '../providers/user-data';

@Page({
  templateUrl: 'app/login/login.html',
  directives: [LoginForm]
})
export class LoginPage {
  constructor(app: IonicApp, nav: NavController, userData: UserData) {
    this.app = app;
    this.nav = nav;
    this.userData = userData;
  }

  loginFormSubmittedHandler(userData) {
    this._login(userData.username, userData.password);
    this.nav.push(TabsPage);
  }

  switchToSignupFormButtonClickedHandler() {
    this.nav.push(SignupPage);
  }

  private _login(username, password) {
    this.userData.login(username, password);

    let menuList = this.app.getComponent('menu-list');
    menuList.updateMenuItems(true);
  }
}
