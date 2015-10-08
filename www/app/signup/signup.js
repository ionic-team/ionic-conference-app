import {Validators, Control, ControlGroup} from 'angular2/angular2';
import {IonicApp, IonicView, NavController} from 'ionic/ionic';

import {LoginPage} from '../login/login';

@IonicView({
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
    // Handle the signup here:
    console.log('Doing signup', this.form.value);


    // Don't allow the form to submit normally, since we
    // will handle it ourselves
    event.preventDefault();
  }
}
