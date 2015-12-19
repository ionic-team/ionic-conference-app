import {Page, NavController} from 'ionic/ionic';
import {TabsPage} from '../tabs/tabs';
import {SignupForm} from './signup-form';

@Page({
  templateUrl: 'app/signup/signup.html',
  directives: [SignupForm]
})
export class SignupPage {
  constructor(nav: NavController) {
    this.nav = nav;
  }

  signupFormSubmittedHandler(userData) {
    this._signup(userData.username, userData.password);
    this.nav.push(TabsPage);
  }

  private _signup(username, password) {
    console.log('do signup');
  }
}
