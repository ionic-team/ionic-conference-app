import {Page, NavController} from 'ionic/ionic';
import {TabsPage} from '../tabs/tabs';

@Page({
  templateUrl: 'app/login/login.html',
})
export class LoginPage {
  constructor(nav: NavController) {
    this.nav = nav;
  }

  login() {
    this.nav.push(TabsPage);
  }

  signup() {
    console.log("Sorry you can't signup yet");
  }

}
