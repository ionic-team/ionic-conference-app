import {Page, NavController} from 'ionic/ionic';
import {TabsPage} from '../tabs/tabs';
import {SignupPage} from '../signup/signup';

@Page({
  templateUrl: 'app/login/login.html',
})
export class LoginPage {
  constructor(nav: NavController) {
    this.nav = nav;
  }

  login() {
    this.nav.push(TabsPage);
  }

  signup() {
    this.nav.push(SignupPage);
  }

}
