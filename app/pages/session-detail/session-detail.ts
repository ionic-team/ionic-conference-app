import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/session-detail/session-detail.html'
})
export class SessionDetailPage {
  session: any;

  constructor(private navParams: NavParams) {
    this.session = navParams.data;
  }
}
