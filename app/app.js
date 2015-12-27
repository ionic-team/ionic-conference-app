import {App, IonicApp, Config} from 'ionic/ionic';
import {ConferenceData} from './providers/conference-data';
import {UserData} from './providers/user-data';
import {TabsPage} from './pages/tabs/tabs';
import {LoginPage} from './pages/login/login';
import {SignupPage} from './pages/signup/signup';
import {TutorialPage} from './pages/tutorial/tutorial';
import {MenuList} from './pages/menu-list/menu-list';


@App({
  templateUrl: 'app.html',
  moduleId: 'build/app.html',
  providers: [ConferenceData, UserData],
  directives: [MenuList]
})
class ConferenceApp {
  constructor(confData: ConferenceData, config: Config) {
    // load the conference data
    confData.load();

    // We plan to add auth to only show the login page if not logged in
    this.root = TutorialPage;
  }
}
