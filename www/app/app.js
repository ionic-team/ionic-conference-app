import {RouteConfig, Location} from 'angular2/router';
import {App, Platform} from 'ionic/ionic';
import {Tabs} from './tabs/tabs';
import {Login} from './login/login';
import './app.scss';

@App({
  templateUrl: 'app/app.html'
})
@RouteConfig([
  { path: '/', component: Login, as: 'Login' },
  { path: '/tabs', component: Tabs, as: 'Tabs' },
])
class ConferenceApp {
  constructor(platform: Platform) {
    this.loggedIn = false;

    // when the platform is ready
    platform.ready().then(() => {
      if (!this.loggedIn) {
        console.log("You aren't logged in");
      }
    });

  }

}
