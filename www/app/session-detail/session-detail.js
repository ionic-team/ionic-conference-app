import {IonicApp, IonicView, NavController, NavParams, Page} from 'ionic/ionic';

@Page({
  templateUrl: 'app/session-detail/session-detail.html',
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
