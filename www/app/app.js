import {App, IonicApp, Config} from 'ionic/ionic';
import {ConferenceData} from './providers/conference-data';
import {UserData} from './providers/user-data';
import {TutorialPage} from './tutorial/tutorial';
import {MenuList} from './menu-list/menu-list';

@App({
  templateUrl: 'app/app.html',
  providers: [ConferenceData, UserData],
  directives: [MenuList]
})
class ConferenceApp {
  constructor(confData: ConferenceData) {
    // load the conference data
    confData.load();

    this.root = TutorialPage;
  }
}
