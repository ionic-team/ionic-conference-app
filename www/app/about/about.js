import {NavController, Page, IonicApp} from 'ionic/ionic';
import {DataService} from '../service/data';
import {Http, HTTP_BINDINGS} from "angular2/http";
import {DateFormat} from '../components/date-format';

@Page({
  templateUrl: 'app/about/about.html',
  providers: [DataService, Http],
  viewBindings: [HTTP_BINDINGS],
  directives: [DateFormat]
})

export class AboutPage {
  constructor(nav: NavController, app: IonicApp, data: DataService) {
    // debugger;
    this.conferenceInfo = data.getData();
  }
}
