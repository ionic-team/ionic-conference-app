import {IonicView, NavController, IonicApp} from 'ionic/ionic';
import {DataService} from '../service/data';
import {DateFormat} from '../components/date-format';
import {PageNavigator} from '../service/pageNavigator';
import {SessionDetailPage} from '../sessionDetail/sessionDetail';
@IonicView({
  templateUrl: 'app/schedule/schedule.html',
  bindings: [DataService],
  directives: [DateFormat]
})

export class SchedulePage extends PageNavigator {
  constructor(nav: NavController, app: IonicApp, data: DataService) {
    super(nav);
    this.schedule = data.getSchedule();
    this.index = 0;
    this.scheduleForTheDay = this.schedule[0];
    this.sessionsForTheDay = this.scheduleForTheDay.sessions;
  }

  nextDay(index) {
    let newIndex = index + 1;
    if (newIndex >= this.schedule.length) {
      return;
    }

    this.scheduleForTheDay = this.schedule[newIndex];
    this.index = newIndex;
    this.sessionsForTheDay = this.scheduleForTheDay.sessions;
    //[1, 2], length = 2
    //0 = 1. index = 0, is passed.
    //if index + 1 = 1. 
  }

  previousDay(index) {
    let newIndex = index - 1;
    if (newIndex < 0) {
      return;
    }

    this.scheduleForTheDay = this.schedule[newIndex];
    this.index = newIndex;
    this.sessionsForTheDay = this.scheduleForTheDay.sessions;
  }

  openSession(session) {
    this.nav.push(SessionDetailPage, session);
  }
}
