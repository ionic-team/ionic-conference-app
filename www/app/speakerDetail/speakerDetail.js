// import {PageNavigator} from '../service/pageNavigator';
import {IonicView, NavController, IonicApp, NavParams, Page} from 'ionic/ionic';
import {SessionDetailPage} from '../sessionDetail/sessionDetail';

@Page({
  templateUrl: 'app/speakerDetail/speakerDetail.html',
})

export class SpeakerDetailPage /*extends PageNavigator //couldnt get this to work, import speakerDetail in PageNavigator */ {
  constructor(nav: NavController, app: IonicApp, navParams: NavParams) {
    this.nav = nav;
    this.navParams = navParams;
    this.speaker = this.navParams.data;
  }

  openSession(session) {
    console.log('Open up session', session);
    this.nav.push(SessionDetailPage, session);
  }
}
