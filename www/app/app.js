import {App} from 'ionic/ionic';
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
  }
})
class ConferenceApp {
  constructor() {
    this.loggedIn = false;
    this.root = Tabs;

    if (!this.loggedIn) {
      this.root = Login;
    }

  }

}
