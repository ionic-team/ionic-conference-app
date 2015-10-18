import {Page} from 'ionic/ionic';
import {DataService} from '../service/data';
import {Http} from "angular2/http";
import {DateFormat} from '../components/date-format';

@Page({
  templateUrl: 'app/about/about.html',
  providers: [DataService, Http],
  directives: [DateFormat]
})
export class AboutPage {
  constructor(data: DataService) {
    this.conferenceInfo = data.getData();
  }
}
