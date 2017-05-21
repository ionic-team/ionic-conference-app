import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

import {NavController} from 'ionic-angular';

import {TabsPage} from '../tabs/tabs';
import {SignupPage} from '../signup/signup';
import {LoginService} from "./login.service";
import {LoginClient} from "./login.client";
import {LoginFormData} from "./login.form.data";


@Component({
  selector: 'page-user',
  templateUrl: 'login.html',
  providers: [LoginService, LoginClient, LoginFormData]
})
export class LoginPage {

  private loginFormData: LoginFormData;

  submitted = false;

  constructor(private navCtrl: NavController, private loginService: LoginService) {
  }

  onLogin(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.loginService.login(this.loginFormData);
      this.navCtrl.push(TabsPage);
    }
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }
}
