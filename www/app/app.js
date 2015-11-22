import {App} from 'ionic/ionic';
import {DataService} from './service/data';
import {TabsPage} from './tabs/tabs';
import {LoginPage} from './login/login';
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

    // We plan to add auth to only show the login page if not logged in
    this.root = LoginPage;
  }
}
