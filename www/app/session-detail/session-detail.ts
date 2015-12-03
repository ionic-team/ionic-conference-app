import {Page, NavParams} from 'ionic-framework/ionic';

@Page({
  templateUrl: 'app/session-detail/session-detail.html',
})
export class SessionDetailPage {
  constructor(navParams: NavParams) {
    this.session = navParams.data;
  }
}
