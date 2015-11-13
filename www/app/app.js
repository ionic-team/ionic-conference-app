import {App, Platform, StatusBar} from 'ionic/ionic';
import {DataService} from './service/data';
import {AboutPage} from './about/about';
import {MapPage} from './map/map';
import {SchedulePage} from './schedule/schedule';
import {SpeakersPage} from './speakers/speakers';
import './app.scss';

@App({
  templateUrl: 'app/app.html',
  providers: [DataService]
})
class ConferenceApp {
  constructor(platform: Platform, dataService: DataService) {
    // set the root pages for each tab
    this.tab1 = SchedulePage;
    this.tab2 = SpeakersPage;
    this.tab3 = MapPage;
    this.tab4 = AboutPage;

    // retrieve the conference data
    dataService.retrieveData();

    // when the platform is ready
    platform.ready().then(() => {

    });
  }

}
