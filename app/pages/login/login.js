import {IonicApp, Page, NavController} from 'ionic/ionic';
import {TabsPage} from '../tabs/tabs';
import {SignupPage} from '../signup/signup';
import {UserData} from '../../providers/user-data';


@Page({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {
  constructor(nav: NavController, app: IonicApp, userData: UserData) {
    this.nav = nav;
    this.app = app;
    this.userData = userData;
  }

  login() {
    this.userData.login();
    
    let menuList = this.app.getComponent('menu-list');
    menuList.updateMenuItems(true);

    this.nav.push(TabsPage);
  }

  signup() {
    this.nav.push(SignupPage);
  }
}
