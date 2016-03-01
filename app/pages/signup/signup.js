import {Page, NavController} from 'ionic-angular';
import {Inject} from 'angular2/core';
import {TabsPage} from '../tabs/tabs';
import {UserData} from '../../providers/user-data';


@Page({
  templateUrl: 'build/pages/signup/signup.html'
})
export class SignupPage {
  static get parameters() {
    return [[NavController], [UserData]];
  }

  constructor(nav, userData) {
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
