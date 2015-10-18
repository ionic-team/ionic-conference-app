import {App, Platform, StatusBar} from 'ionic/ionic';
import {DataService} from './service/data';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AboutPage} from './about/about';
import {MapPage} from './map/map';
import {SchedulePage} from './schedule/schedule';
import {SpeakersPage} from './speakers/speakers';


@App({
  templateUrl: 'app/app.html',
  providers: [DataService, HTTP_PROVIDERS]
})
class ConferenceApp {
  constructor(platform: Platform, data: DataService) {
    // set the root pages for each tab
    this.tab1 = SchedulePage;
    this.tab2 = SpeakersPage;
    this.tab3 = MapPage;
    this.tab4 = AboutPage;

    // retrieve the conference data
    data.retrieveData();

    // when the platform is ready, set the status bar's style
    platform.ready().then(() => {
      StatusBar.setStyle(StatusBar.DEFAULT);
    });
  }

}
