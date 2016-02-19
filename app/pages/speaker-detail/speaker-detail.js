import {NavController, NavParams, Page} from 'ionic/ionic';
import {Inject} from 'angular2/core';
import {SessionDetailPage} from '../session-detail/session-detail';


@Page({
  templateUrl: 'build/pages/speaker-detail/speaker-detail.html'
})
export class SpeakerDetailPage {
  constructor(@Inject(NavController) nav, @Inject(NavParams) navParams) {
    this.nav = nav;
    this.navParams = navParams;
    this.speaker = this.navParams.data;
  }

  goToSessionDetail(session) {
    this.nav.push(SessionDetailPage, session);
  }
}
