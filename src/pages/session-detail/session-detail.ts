import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';


@Component({
  selector: 'page-session-detail',
  templateUrl: 'session-detail.html'
})
export class SessionDetailPage {
  session: any;

  constructor(public navParams: NavParams) {
    this.session = navParams.data.session;
  }
}
