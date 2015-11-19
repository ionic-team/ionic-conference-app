import {App} from 'ionic/ionic';
import {DataService} from './service/data';
import {Tabs} from './tabs/tabs';
import {Login} from './login/login';
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
  constructor(dataService: DataService) {
    // retrieve the conference data
    dataService.retrieveData();

    this.loggedIn = false;
    this.root = Tabs;

    if (!this.loggedIn) {
      this.root = Tabs;
    }
  }
}
