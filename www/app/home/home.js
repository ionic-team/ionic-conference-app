import {IonicView, NavController, IonicApp} from 'ionic/ionic';
import {DataService} from '../service/data';
import {Http, HTTP_BINDINGS} from "angular2/http";
import {DateFormat} from '../components/date-format';

import {AboutPage} from '../about/about';
import {SchedulePage} from '../schedule/schedule';
import {SpeakersPage} from '../speakers/speakers';
import {MapPage} from '../map/map';

@IonicView({
  templateUrl: 'app/home/home.html',
  directives: [DateFormat]
})

export class HomePage {
  constructor(nav: NavController, app: IonicApp) {
    this.nav = nav;
    this.app = app;
    this.AboutPage = AboutPage;
    this.MapPage = MapPage;
    this.SchedulePage = SchedulePage;
    this.SpeakersPage = SpeakersPage;
  }
}
