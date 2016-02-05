import {App, IonicApp, Events} from 'ionic-framework/ionic';
import {ConferenceData} from './providers/conference-data';
import {UserData} from './providers/user-data';
import {TabsPage} from './pages/tabs/tabs';
import {LoginPage} from './pages/login/login';
import {SignupPage} from './pages/signup/signup';
import {TutorialPage} from './pages/tutorial/tutorial';

// https://angular.io/docs/ts/latest/api/core/Type-interface.html
import {Type} from 'angular2/core';


interface PageObj {
  title: string;
  component: Type;
  icon: string;
  hide: boolean;
}

@App({
  templateUrl: 'build/app.html',
  providers: [ConferenceData, UserData],
  config: {}
})
class ConferenceApp {
  rootPage: Type = TutorialPage;
  pages: PageObj[];

  constructor(
    private app: IonicApp,
    private events: Events,
    private userData: UserData,
    confData: ConferenceData
  ) {
    // load the conference data
    confData.load();

    // create an list of pages that can be navigated to from the left menu
    // the left menu only works after login
    // the login page disables the left menu
    this.pages = [
      { title: 'Schedules', component: TabsPage, icon: 'calendar', hide: false },
      { title: 'Login', component: LoginPage, icon: 'log-in', hide: true },
      { title: 'Signup', component: SignupPage, icon: 'person-add', hide: true },
      { title: 'Logout', component: LoginPage, icon: 'log-out', hide: true },
    ];

    // decide which menu items should be hidden by current login status stored in local storage
    this.userData.hasLoggedIn().then((hasLoggedIn) => {
      this.updateSideMenuItems(hasLoggedIn)
    });

    this.listenToLoginEvents();
  }

  openPage(page: PageObj) {
    if (page.title === 'Logout') {
      this.userData.logout();
    }

    // find the nav component and set what the root page should be
    // reset the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }

  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.updateSideMenuItems(true);
    });

    this.events.subscribe('user:signup', () => {
      this.updateSideMenuItems(true);
    });

    this.events.subscribe('user:logout', () => {
      this.updateSideMenuItems(false);
    });
  }

  updateSideMenuItems(hasLoggedIn: boolean) {
    if (hasLoggedIn) {
      this.findMenuItemByTitle('Login').hide = true;
      this.findMenuItemByTitle('Signup').hide = true;
      this.findMenuItemByTitle('Logout').hide = false;
    } else {
      this.findMenuItemByTitle('Login').hide = false;
      this.findMenuItemByTitle('Signup').hide = false;
      this.findMenuItemByTitle('Logout').hide = true;
    }
  }

  findMenuItemByTitle(title: string): PageObj {
    return this.pages.find((menuItem) => {
      return menuItem.title === title
    })
  }
}
