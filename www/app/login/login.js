import {Validators, Control, ControlGroup} from 'angular2/angular2';
import {IonicApp, Page, NavController} from 'ionic/ionic';

import {SignupPage} from '../signup/signup';

@Page({
  templateUrl: 'app/login/login.html'
})
export class LoginPage {
  constructor(app: IonicApp, nav: NavController) {
    this.form = new ControlGroup({
      email: new Control('', Validators.required),
      password: new Control('', Validators.required),
    });

    this.signupPage = SignupPage;
    this.forgotPasswordPage = ForgotPasswordPage;

    this.loginData = {};
  }

  doLogin(event) {
    // Don't allow the form to submit normally, since we
    // will handle it ourselves
    event.preventDefault();
  }
}

@Page({
  templateUrl: 'app/login/forgot-password.html'
})
export class ForgotPasswordPage {
  constructor(app: IonicApp, nav: NavController) {
    this.email = "";
  }
  doForgotPassword(event) {
    event.preventDefault();
  }
}
