import {Page, NavController} from 'ionic-framework/ionic';
import {TabsPage} from '../tabs/tabs';

@Page({
  templateUrl: 'signup.html',
  moduleId: module.id
})
export class SignupPage {
  nav: any;

  constructor(nav: NavController) {
    this.nav = nav;
  }

  signup() {
    this.nav.push(TabsPage);
  }
}
