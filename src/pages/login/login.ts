import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

import {NavController} from 'ionic-angular';

import {UserData} from '../../providers/user-data';

import {TabsPage} from '../tabs/tabs';
import {SignupPage} from '../signup/signup';
import {LoginService} from "./login.service";


@Component({
  selector: 'page-user',
  templateUrl: 'login.html',
  providers: [LoginService ]
})
export class LoginPage {
  login: { username?: string, password?: string } = {};
  submitted = false;

  constructor(private navCtrl: NavController, private userData: UserData, private loginService: LoginService) {
  }

  onLogin(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.loginService.login(this.login.username, this.login.password);

      this.userData.login(this.login.username);
      this.navCtrl.push(TabsPage);
    }
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }
}
