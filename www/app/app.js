import {App, Platform} from 'ionic/ionic';
import {Tabs} from './tabs/tabs';
import {Login} from './login/login';
import './app.scss';

@App({
  templateUrl: 'app/app.html'
})
class ConferenceApp {
  constructor(platform: Platform) {
    this.loggedIn = false;
    this.root = Tabs;

    // when the platform is ready
    platform.ready().then(() => {

    });

    if (!this.loggedIn) {
      this.root = Login;
    }

  }

}
