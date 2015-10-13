// import {PageNavigator} from '../service/pageNavigator';
import {IonicView, NavController, IonicApp, NavParams, Page} from 'ionic/ionic';
import {SessionDetailPage} from '../session-detail/session-detail';
import {DataService} from '../service/data';

@Page({
  templateUrl: 'app/speaker-detail/speaker-detail.html',
})

export class SpeakerDetailPage /*extends PageNavigator //couldnt get this to work, import speakerDetail in PageNavigator */ {
  constructor(nav: NavController, app: IonicApp, navParams: NavParams, dataService: DataService) {
    this.nav = nav;
    this.navParams = navParams;
    this.dataService = dataService;

    let speakerName = this.navParams.data.speaker;
    let speakerList = this.dataService.getSpeakers();

    this.speaker = speakerList.find( (v) => {
      if(v.name.toLowerCase().indexOf(speakerName.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }

  openSession(session) {
    console.log('Open up session', session);
    this.nav.push(SessionDetailPage, session);
  }
}
