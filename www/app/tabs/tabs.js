import {NavController, Page} from 'ionic/ionic';
import {DataService} from '../service/data';
import {About} from '../about/about';
import {Map} from '../map/map';
import {Schedules} from '../schedules/schedules';
import {Speakers} from '../speakers/speakers';

@Page({
  templateUrl: 'app/tabs/tabs.html',
  providers: [DataService]
})
export class Tabs {
  constructor(nav: NavController, dataService: DataService) {
    // set the root pages for each tab
    this.tab1Root = Schedules;
    this.tab2Root = Speakers;
    this.tab3Root = Map;
    this.tab4Root = About;

    // retrieve the conference data
    dataService.retrieveData();
  }
}
