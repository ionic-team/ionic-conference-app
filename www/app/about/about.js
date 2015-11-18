import {Page} from 'ionic/ionic';
import {DataService} from '../service/data';
import {Http} from "angular2/http";
import {ConvertDate} from '../pipes/convert-date';
import {DateFormat} from '../components/date-format';

@Page({
  templateUrl: 'app/about/about.html',
  providers: [Http],
  directives: [DateFormat],
  pipes: [ConvertDate]
})
export class About {
  constructor(dataService: DataService) {
    this.conferenceInfo = dataService.getData();
  }
}
