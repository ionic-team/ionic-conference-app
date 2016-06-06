import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/session-detail/session-detail.html'
})
export class SessionDetailPage {
  static get parameters() {
    return [[NavParams]];
  }

  constructor(navParams) {
    this.navParams = navParams;
    this.session = navParams.data;
  }
}
