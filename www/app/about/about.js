import {Page} from 'ionic/ionic';
import {DataService} from '../service/data';
import {DateFormat} from '../date-format/date-format';

@Page({
  templateUrl: 'app/about/about.html',
  directives: [DateFormat]
})
export class AboutPage {
  constructor(dataService: DataService) {
    this.conferenceInfo = dataService.getData();
  }
}
