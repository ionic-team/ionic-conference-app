import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {SignupPage} from '../signup/signup';
import {UserData} from '../../providers/user-data';


@Component({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {
  login: {username?: string, password?: string} = {};
  submitted = false;

  constructor(private nav: NavController, private userData: UserData) {}

  onLogin(form) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username);
      this.nav.push(TabsPage);
    }
  }

  onSignup() {
    this.nav.push(SignupPage);
  }
}
