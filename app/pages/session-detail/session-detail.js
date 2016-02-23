import {Page, NavParams} from 'ionic-framework/ionic';
import {Inject} from 'angular2/core';


@Page({
  templateUrl: 'build/pages/session-detail/session-detail.html'
})
export class SessionDetailPage {
  static get parameters(){
    return [[NavParams]];
  }

  constructor(navParams) {
    this.navParams = navParams;
    this.session = navParams.data;
  }
}
