import {Page, NavParams} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/session-detail/session-detail.html'
})
export class SessionDetailPage {
  session: any;

  constructor(private navParams: NavParams) {
    this.session = navParams.data;
  }
}
