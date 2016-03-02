import {IonicApp, Page, NavController} from 'ionic-framework/ionic';
import {Inject} from 'angular2/core';
import {TabsPage} from '../tabs/tabs';
import {SignupPage} from '../signup/signup';
import {UserData} from '../../providers/user-data';
import {DbPage} from '../db/db';


@Page({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {
  static get parameters(){
    return [[NavController], [UserData]];
  }

  constructor(nav, userData) {
    this.nav = nav;
    this.userData = userData;

    this.login = {};
    this.submitted = false;
  }

  onLogin(form) {
    this.submitted = true;
	//
	var id = this.login.username;
	var wp = this.login.password;
	if(!DbPage.exists("users", id))
		throw "username does not exists";
	

    if (form.valid) {
      this.userData.login(id, wp);
      this.nav.push(TabsPage);
    }
  }

  onSignup() {
    this.nav.push(SignupPage);
  }
}
