import {App, IonicApp, Config} from 'ionic-framework/ionic';
import {ConferenceData} from './providers/conference-data';
import {UserData} from './providers/user-data';
import {TabsPage} from './tabs/tabs';
import {LoginPage} from './login/login';
import {SignupPage} from './signup/signup';


@App({
  templateUrl: 'app/app.html',
  providers: [ConferenceData, UserData]
})
class ConferenceApp {
  constructor(app: IonicApp, confData: ConferenceData, config: Config) {
    this.app = app;

    // load the conference data
    confData.load();

    // We plan to add auth to only show the login page if not logged in
    this.root = LoginPage;

    // create an list of pages that can be navigated to from the left menu
    // the left menu only works after login
    // the login page disables the left menu
    this.pages = [
      { title: 'Login', component: LoginPage, icon: 'log-in' },
      { title: 'Signup', component: SignupPage, icon: 'person-add' },
      { title: 'Logout', component: LoginPage, icon: 'log-out' },
    ];
  }

  openPage(page) {
    // find the nav component and set what the root page should be
    // reset the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component).then(() => {
      // wait for the root page to be completely loaded
      // then close the menu
      this.app.getComponent('leftMenu').close();
    });
  }
}
