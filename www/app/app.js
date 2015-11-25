import {App, IonicApp, Config} from 'ionic/ionic';
import {DataService} from './service/data';
import {TabsPage} from './tabs/tabs';
import {LoginPage} from './login/login';
import {SignupPage} from './signup/signup';
import './app.scss';

@App({
  templateUrl: 'app/app.html',
  config: {
    platforms: {
     android: {
       navbarStyle: 'primary',
       tabbarStyle: 'primary'
     }
    }
  },
  providers: [DataService]
})
class ConferenceApp {
  constructor(app: IonicApp, dataService: DataService, config: Config) {
    this.app = app;

    // retrieve the conference data
    dataService.retrieveData();

    // We plan to add auth to only show the login page if not logged in
    this.root = LoginPage;
    this.isMD = config.get('mode') == 'md' ? '' : null;

    this.pages = [
      { title: 'Login', component: LoginPage },
      { title: 'Signup', component: SignupPage },
      { title: 'Logout', component: LoginPage },
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component).then(() => {
      // wait for the root page to be completely loaded
      // then close the menu
      this.app.getComponent('leftMenu').close();
    });
  }
}
