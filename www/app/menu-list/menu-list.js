import {Component, View, NgFor} from 'angular2/angular2';
import {IonicApp, Page, NavController, IONIC_DIRECTIVES} from 'ionic/ionic';
import {TabsPage} from '../tabs/tabs';
import {SignupPage} from '../signup/signup';
import {LoginPage} from '../login/login';
import {UserData} from '../providers/user-data';

@Component({
  selector: "menu-list"
})
@View({
  templateUrl: 'app/menu-list/menu-list.html'
  directives: [IONIC_DIRECTIVES]
})
export class MenuList {
  menuItems: Array<any>;

  constructor(app: IonicApp, userData: UserData) {
    this.app = app;
    this.userData = userData;

    // We plan to add auth to only show the login page if not logged in

    // create an list of pages that can be navigated to from the left menu
    // the left menu only works after login
    // the login page disables the left menu
    this.menuItems = [
      { title: 'Schedules', component: TabsPage, icon: 'calendar', hide: false },
      { title: 'Login', component: LoginPage, icon: 'log-in', hide: false },
      { title: 'Signup', component: SignupPage, icon: 'person-add', hide: false },
      { title: 'Logout', component: LoginPage, icon: 'log-out', hide: true }
    ];

    this.userData.hasLoggedIn().then((hasLoggedIn) => {
      this.updateMenuItems(hasLoggedIn);
    })
  }

  updateMenuItems(hasLoggedIn) {
    if (hasLoggedIn) {
      this._hideMenuItem('Login');
      this._hideMenuItem('Signup');
      this._showMenuItem('Logout');
    } else {
      this._showMenuItem('Login');
      this._showMenuItem('Signup');
      this._hideMenuItem('Logout');
    }
  }

  openPage(menuItem) {
    // find the nav component and set what the root page should be
    // reset the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario
    let nav = this.app.getComponent('nav');
    nav.setRoot(menuItem.component).then(() => {
      // wait for the root page to be completely loaded
      // then close the menu
      this.app.getComponent('leftMenu').close();
    });

    if (menuItem.title === 'Logout') {
      this._doLogout();
    }
  }

  private _hideMenuItem(title) {
    this._findMenuItemByTitle(title).hide = true;
  }

  private _showMenuItem(title) {
    this._findMenuItemByTitle(title).hide = false;
  }

  private _findMenuItemByTitle(title) {
    return this.menuItems.find((menuItem) => menuItem.title === title);
  }

  private _doLogout() {
    this.userData.logout();
    this.updateMenuItems(false);
  }
}
