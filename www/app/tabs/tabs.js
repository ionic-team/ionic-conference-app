import {NavController, Page} from 'ionic/ionic';
import {AboutPage} from '../about/about';
import {MapPage} from '../map/map';
import {SessionsPage} from '../sessions/sessions';
import {SpeakersPage} from '../speakers/speakers';

@Page({
  templateUrl: 'app/tabs/tabs.html'
})
export class TabsPage {
  constructor(nav: NavController) {
    // set the root pages for each tab
    this.tab1Root = SessionsPage;
    this.tab2Root = SpeakersPage;
    this.tab3Root = MapPage;
    this.tab4Root = AboutPage;
  }
}
