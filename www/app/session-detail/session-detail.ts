import {Page, NavParams} from 'ionic-framework/ionic';

@Page({
  templateUrl: 'app/session-detail/session-detail.html',
})
export class SessionDetailPage {
  session: any;
  navParams: any;

  constructor(navParams: NavParams) {
    this.navParams = navParams;
    this.session = navParams.data;
  }
}
