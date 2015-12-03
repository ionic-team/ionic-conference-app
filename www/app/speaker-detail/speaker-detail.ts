import {NavController, NavParams, Page} from 'ionic-framework/ionic';
import {SessionDetailPage} from '../session-detail/session-detail';


@Page({
  templateUrl: 'app/speaker-detail/speaker-detail.html',
})
export class SpeakerDetailPage {
  constructor(nav: NavController, navParams: NavParams) {
    this.nav = nav;
    this.speaker = navParams.data;
  }

  goToSessionDetail(session) {
    this.nav.push(SessionDetailPage, session);
  }
}
