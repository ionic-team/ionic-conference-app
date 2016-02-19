import {Page, NavParams} from 'ionic/ionic';
import {Inject} from 'angular2/core';


@Page({
  templateUrl: 'build/pages/session-detail/session-detail.html'
})
export class SessionDetailPage {
  constructor(@Inject(NavParams) navParams) {
    this.navParams = navParams;
    this.session = navParams.data;
  }
}
