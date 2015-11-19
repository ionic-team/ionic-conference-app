import {NavController, Page} from 'ionic/ionic';
import {About} from '../about/about';
import {Map} from '../map/map';
import {Sessions} from '../sessions/sessions';
import {Speakers} from '../speakers/speakers';

@Page({
  templateUrl: 'app/tabs/tabs.html'
})
export class Tabs {
  constructor(nav: NavController) {
    // set the root pages for each tab
    this.tab1Root = Sessions;
    this.tab2Root = Speakers;
    this.tab3Root = Map;
    this.tab4Root = About;
  }
}
