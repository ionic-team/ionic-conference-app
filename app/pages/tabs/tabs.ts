import {Page, NavParams} from 'ionic-framework/ionic';
import {SchedulePage} from '../schedule/schedule';
import {SpeakerListPage} from '../speaker-list/speaker-list';
import {MapPage} from '../map/map';
import {AboutPage} from '../about/about';

// https://angular.io/docs/ts/latest/api/core/Type-interface.html
import {Type} from 'angular2/core';

@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: Type = SchedulePage;
  tab2Root: Type = SpeakerListPage;
  tab3Root: Type = MapPage;
  tab4Root: Type = AboutPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }
}
