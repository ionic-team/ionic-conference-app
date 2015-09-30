import {IonicView, NavController, IonicApp, NavParams} from 'ionic/ionic';

@IonicView({
  templateUrl: 'app/speakerDetail/speakerDetail.html',
})

export class SpeakerDetailPage {
  constructor(nav: NavController, app: IonicApp, navParams: NavParams) {
    this.nav = nav;
    this.navParams = navParams;
    this.speaker = this.navParams.data;
  }

  onInit() { 
    console.log('SpeakerDetailPage init', this.navParams);
  }
}
