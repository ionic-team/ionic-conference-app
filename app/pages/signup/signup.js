import {IonicApp, Page, NavController} from 'ionic/ionic';
import {TabsPage} from '../tabs/tabs';
import {UserData} from '../../providers/user-data';


@Page({
  templateUrl: 'build/pages/signup/signup.html'
})
export class SignupPage {
  constructor(nav: NavController, app: IonicApp, userData: UserData) {
    this.nav = nav;
    this.app = app;
    this.userData = userData;
  }

  signup() {
    this.userData.login();

    let menuList = this.app.getComponent('menu-list');
    menuList.updateMenuItems(true);

    this.nav.push(TabsPage);
  }
}
