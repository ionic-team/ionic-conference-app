import {IonicView, NavController, IonicApp} from 'ionic/ionic';
import {DataService} from '../service/data';
import {Http, HTTP_BINDINGS} from "angular2/http";
import {DateFormat} from '../components/date-format';
import {AboutPage} from '../about/about';
import {SchedulePage} from '../schedule/schedule';
import {SpeakersPage} from '../speakers/speakers';
import {MapPage} from '../map/map';
import {EventsPage} from '../events/events';
import {TicketsPage} from '../tickets/tickets';

@IonicView({
  templateUrl: 'app/home/home.html',
  bindings: [DataService, Http],
  viewBindings: [HTTP_BINDINGS],
  directives: [DateFormat]
})

export class HomePage {
  constructor(nav: NavController, app: IonicApp, data: DataService) {
    this.nav = nav;
    this.app = app;
    console.log('we got app', app);
    this.topActions = [
      {name: 'About', component: AboutPage}, 
      {name: 'Schedule', component: SchedulePage }, 
      {name: 'Speakers', component: SpeakersPage }
      ];
    this.bottomActions = [ 
      {name: 'Map', component: MapPage },
      {name: 'Events', component: EventsPage },
      {name: 'Buy Tickets', component: TicketsPage }
    ];
    // debugger;
    this.conferenceInfo = data.getData();
  }

  openAction(action) {
    console.log('openAction', action);
  }
}
