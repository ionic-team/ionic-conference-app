import {Page, NavController} from 'ionic/ionic';
import {Tabs} from '../tabs/tabs';

@Page({
  templateUrl: 'app/login/login.html',
})
export class Login {
  constructor(nav: NavController) {
    this.nav = nav;
  }

  login() {
    this.nav.push(Tabs);
  }

  signup() {
    console.log("Sorry you can't signup yet");
  }

}
