import {Page} from 'ionic/ionic';
import {DataService} from '../service/data';
import {Http} from "angular2/http";
import {ConvertDate} from '../pipes/convert-date';

@Page({
  templateUrl: 'app/about/about.html',
  providers: [DataService, Http],
  pipes: [ConvertDate]
})
export class AboutPage {
  constructor(data: DataService) {
    this.conferenceInfo = data.getData();
  }
}
