import {Page, NavParams} from 'ionic/ionic';


@Page({
  templateUrl: 'build/pages/session-detail/session-detail.html'
})
export class SessionDetailPage {
  constructor(navParams: NavParams) {
    this.navParams = navParams;
    this.session = navParams.data;
  }
}
