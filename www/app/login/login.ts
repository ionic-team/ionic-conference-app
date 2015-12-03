import {IonicApp, Page, NavController} from 'ionic-framework/ionic';
import {TabsPage} from '../tabs/tabs';
import {SignupPage} from '../signup/signup';


@Page({
  templateUrl: 'app/login/login.html',
})
export class LoginPage {
  constructor(nav: NavController, app: IonicApp) {
    this.nav = nav;
    this.app = app;
  }

  login() {
    this.nav.push(TabsPage);
  }

  signup() {
    this.nav.push(SignupPage);
  }

  onPageDidEnter() {
    // the root left menu should be disabled on the login page
    this.app.getComponent('leftMenu').enable(false);
  }

  onPageWillLeave() {
    // enable the root left menu when leaving the login page
    this.app.getComponent('leftMenu').enable(true);
  }
}
