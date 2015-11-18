import {Page, NavController} from 'ionic/ionic';

@Page({
  templateUrl: 'app/login/login.html',
})
export class Login {
  constructor(nav: NavController) {
    this.nav = nav;
  }
}
