import {Page, NavParams} from 'ionic/ionic';


@Page({
  templateUrl: 'session-detail.html',
  moduleId: module.id
})
export class SessionDetailPage {
  constructor(navParams: NavParams) {
    this.navParams = navParams;
    this.session = navParams.data;
  }
}
