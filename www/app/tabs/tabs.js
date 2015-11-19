import {NavController, Page} from 'ionic/ionic';
import {AboutPage} from '../about/about';
import {MapPage} from '../map/map';
import {SchedulePage} from '../schedule/schedule';
import {SpeakerListPage} from '../speaker-list/speaker-list';

@Page({
  templateUrl: 'app/tabs/tabs.html'
})
export class TabsPage {
  constructor(nav: NavController) {
    // set the root pages for each tab
    this.tab1Root = SchedulePage;
    this.tab2Root = SpeakerListPage;
    this.tab3Root = MapPage;
    this.tab4Root = AboutPage;
  }
}
