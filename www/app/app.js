import {App, Platform, StatusBar} from 'ionic/ionic';
import {DataService} from './service/data';
import {About} from './about/about';
import {Map} from './map/map';
import {SchedulePage} from './schedule/schedule';
import {Speakers} from './speakers/speakers';
import './app.scss';

@App({
  templateUrl: 'app/app.html',
  providers: [DataService]
})
class ConferenceApp {
  constructor(platform: Platform, dataService: DataService) {
    // set the root pages for each tab
    this.tab1Root = SchedulePage;
    this.tab2Root = Speakers;
    this.tab3Root = Map;
    this.tab4Root = About;

    // retrieve the conference data
    dataService.retrieveData();

    // when the platform is ready
    platform.ready().then(() => {

    });
  }

}
