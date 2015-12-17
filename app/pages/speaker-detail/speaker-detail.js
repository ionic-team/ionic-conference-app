import {NavController, NavParams, Page} from 'ionic/ionic';
import {SessionDetailPage} from '../session-detail/session-detail';


@Page({
  templateUrl: 'speaker-detail.html',
  moduleId: module.id
})
export class SpeakerDetailPage {
  constructor(nav: NavController, navParams: NavParams) {
    this.nav = nav;
    this.navParams = navParams;
    this.speaker = this.navParams.data;
  }

  goToSessionDetail(session) {
    this.nav.push(SessionDetailPage, session);
  }
}
