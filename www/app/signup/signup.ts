import {Page, NavController} from 'ionic-framework/ionic';
import {TabsPage} from '../tabs/tabs';

@Page({
  templateUrl: 'app/signup/signup.html',
})
export class SignupPage {
  constructor(nav: NavController) {
    this.nav = nav;
  }

  signup() {
    this.nav.push(TabsPage);
  }
}
