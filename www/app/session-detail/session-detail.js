import {NavParams, Page} from 'ionic/ionic';

@Page({
  templateUrl: 'app/session-detail/session-detail.html',
})
export class SessionDetail {
  constructor(navParams: NavParams) {
    this.navParams = navParams;
    this.session = this.navParams.data;
  }
}
