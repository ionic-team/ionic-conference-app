import {App, IonicApp, IonicPlatform} from 'ionic/ionic';

import {GettingStartedPage} from './getting-started/getting-started';
import {IntroPage} from './intro/intro';
import {LoginPage} from './login/login';
import {SignupPage} from './signup/signup';
import {TabsPage} from './tabs/tabs';
import {ListPage} from './list/list';
import {GridPage} from './grid/grid';
import {PlaylistPage} from './playlist/playlists';
import {HomePage} from './home/home';
import {AboutPage} from './about/about';
import {SchedulePage} from './schedule/schedule';
import {SpeakersPage} from './speakers/speakers';
import {MapPage} from './map/map';
import {EventsPage} from './events/events';
import {TicketsPage} from './tickets/tickets';

import {DataService} from './service/data';
import {Http, HTTP_BINDINGS} from "angular2/http";

@App({
  templateUrl: 'app/app.html',
  bindings: [DataService, Http],
  viewBindings: [HTTP_BINDINGS]
})

class MyApp {
  constructor(app: IonicApp, platform: IonicPlatform, data: DataService) {
    this.app = app;
    this.platform = platform;

    this.conferenceInfo = {
      end: '05/21/2016',
      location: 'Madison, WI',
      name: 'Ionic 2 Conf',
      start: '05/19/2016'
    };

    data.retrieveData();

    this.initializeApp();

    // used for an example of ng-for and navigation
    this.pages = [
      // { title: 'Getting Started', component: GettingStartedPage },
      // { title: 'Intro', component: IntroPage },
      // { title: 'Login', component: LoginPage },
      // { title: 'Signup', component: SignupPage },
      // { title: 'Tabs', component: TabsPage },
      // { title: 'List', component: ListPage },
      // { title: 'Grid Icons', component: GridPage },
      // { title: 'Playlists', component: PlaylistPage },
      { title: 'Home', component: HomePage },
      { title: 'About', component: AboutPage },
      { title: 'Schedule', component: SchedulePage },
      { title: 'Speakers', component: SpeakersPage }
      { title: 'Map', component: MapPage },
      { title: 'Events', component: EventsPage },
      { title: 'Buy Tickets', component: TicketsPage }
    ];

    this.About = AboutPage;

    this.rootPage = HomePage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Platform ready');

      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      // Keyboard.setAccessoryBarVisible(false);
      //
      // For example, we might change the StatusBar color. This one below is
      // good for dark backgrounds and light text:
      // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)

    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.app.getComponent('menu').close();

    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    let nav = this.app.getComponent('nav');
    console.log('got nav', nav, 'page', page);
    nav.setRoot(page.component);
  }
}
