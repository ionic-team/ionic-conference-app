import {Page, NavController} from 'ionic-framework/ionic';
import {TabsPage} from '../tabs/tabs';
import {UserData} from '../../providers/user-data';

@Page({
  templateUrl: 'build/pages/signup/signup.html'
})
export class SignupPage {
  nav: any;

  constructor(nav: NavController, userData: UserData) {
    this.nav = nav;
    this.userData = userData;

    this.signup = {};
    this.submitted = false;
  }

  onSignup(form) {
    this.submitted = true;

    console.log(form);

    if (form.valid) {
      this.userData.signup();
      this.nav.push(TabsPage);
    }
  }
}
