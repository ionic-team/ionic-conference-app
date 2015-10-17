import {Validators, Control, ControlGroup} from 'angular2/angular2';
import {IonicApp, Page, NavController} from 'ionic/ionic';

import {LoginPage} from '../login/login';

@Page({
  templateUrl: 'app/signup/signup.html'
})
export class SignupPage {
  constructor(app: IonicApp, nav: NavController) {
    this.form = new ControlGroup({
      name: new Control("", Validators.required),
      email: new Control("", Validators.required),
      password: new Control("", Validators.required),
    });

    this.loginPage = LoginPage;
  }

  doSignup(event) {
    // Don't allow the form to submit normally, since we
    // will handle it ourselves
    event.preventDefault();
  }
}
