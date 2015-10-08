import {IonicApp, IonicView, NavController, NavParams, Page} from 'ionic/ionic';

@Page({
  templateUrl: 'app/sessionDetail/sessionDetail.html',
})

export class SessionDetailPage {
  constructor(nav: NavController, app: IonicApp, navParams: NavParams) {
    this.nav = nav;
    this.navParams = navParams;
    this.session = this.navParams.data;
  }

  onInit() { 
    console.log('SessionDetailPage init', this.navParams);
  }
}
