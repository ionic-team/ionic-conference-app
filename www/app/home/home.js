import {Page} from 'ionic/ionic';
import {DateFormat} from '../components/date-format';

import {AboutPage} from '../about/about';
import {MapPage} from '../map/map';
import {SchedulePage} from '../schedule/schedule';
import {SpeakersPage} from '../speakers/speakers';

@Page({
  templateUrl: 'app/home/home.html',
  directives: [DateFormat]
})
export class HomePage {
  constructor() {
    this.AboutPage = AboutPage;
    this.MapPage = MapPage;
    this.SchedulePage = SchedulePage;
    this.SpeakersPage = SpeakersPage;
  }
}
