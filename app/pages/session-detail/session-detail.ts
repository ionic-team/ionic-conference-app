import {Page, NavParams} from 'ionic-framework/ionic';


@Page({
  templateUrl: 'session-detail.html',
  moduleId: module.id
})
export class SessionDetailPage {
  session: any;
  navParams: any;

  constructor(navParams: NavParams) {
    this.navParams = navParams;
    this.session = navParams.data;
  }
}
