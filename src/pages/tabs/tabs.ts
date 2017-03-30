import { Component } from '@angular/core';

import { IonicPage, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: string = 'SchedulePage';
  tab2Root: string = 'SpeakerListPage';
  tab3Root: string = 'MapPage';
  tab4Root: string = 'AboutPage';
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
