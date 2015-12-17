import {Page, NavController} from 'ionic/ionic';
import {TabsPage} from '../tabs/tabs';


@Page({
  templateUrl: 'signup.html',
  moduleId: module.id
})
export class SignupPage {
  constructor(nav: NavController) {
    this.nav = nav;
  }

  signup() {
    this.nav.push(TabsPage);
  }
}
