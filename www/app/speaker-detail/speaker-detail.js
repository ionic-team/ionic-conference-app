import {NavController, NavParams, Page} from 'ionic/ionic';
import {SessionDetailPage} from '../session-detail/session-detail';
import {DataService} from '../service/data';

@Page({
  templateUrl: 'app/speaker-detail/speaker-detail.html',
})
export class SpeakerDetailPage {
  constructor(nav: NavController, navParams: NavParams, dataService: DataService) {
    this.nav = nav;
    this.navParams = navParams;
    this.dataService = dataService;

    let speakerName = this.navParams.data;
    let speakerList = this.dataService.getSpeakers();

    this.speaker = speakerList.find( (v) => {
      if(v.name.toLowerCase().indexOf(speakerName.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }

  openSession(session) {
    this.nav.push(SessionDetailPage, session);
  }
}
