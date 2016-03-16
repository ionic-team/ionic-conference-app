import {Page, NavParams} from 'ionic-angular';
import {SchedulePage} from '../schedule/schedule';
import {SpeakerListPage} from '../speaker-list/speaker-list';
import {MapPage} from '../map/map';
import {AboutPage} from '../about/about';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  static get parameters() {
    return [[NavParams]];
  }

  constructor(navParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;

    // set the root pages for each tab
    this.tab1Root = SchedulePage;
    this.tab2Root = SpeakerListPage;
    this.tab3Root = MapPage;
    this.tab4Root = AboutPage;
  }
}
