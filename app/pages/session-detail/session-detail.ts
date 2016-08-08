import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/session-detail/session-detail.html'
})
export class SessionDetailPage {
  session: any;

  constructor(public navParams: NavParams) {
    this.session = navParams.data;
  }
}
