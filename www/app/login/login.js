import {IonicApp, Page, NavController} from 'ionic/ionic';
import {TabsPage} from '../tabs/tabs';
import {SignupPage} from '../signup/signup';
import {LoginForm} from './login-form';

@Page({
  templateUrl: 'app/login/login.html',
  directives: [LoginForm]
})
export class LoginPage {
  constructor(nav: NavController, app: IonicApp) {
    this.nav = nav;
    this.app = app;
  }

  loginFormSubmittedHandler(userData) {
    this._login(userData.username, userData.password);
    this.nav.push(TabsPage);
  }

  switchToSignupFormButtonClickedHandler() {
    this.nav.push(SignupPage);
  }

  private _login(username, password) {
    console.log('do login');
  }
}
