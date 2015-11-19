import {NavController, Page, SearchBar, Modal} from 'ionic/ionic';
import {DataService} from '../service/data';
import {SessionDetailPage} from '../session-detail/session-detail';
import {SessionFilterPage} from '../session-filter/session-filter';
import {SessionList} from '../session-list/session-list';

@Page({
  templateUrl: 'app/schedule/schedule.html',
  directives: [SessionList, SearchBar]
})
export class SchedulePage {
  constructor(nav: NavController, dataService: DataService, modal: Modal) {
    this.nav = nav;
    this.modal = modal;
    
    this.schedule = dataService.getSchedule();
    this.sessionsForTheDay = this.schedule[0].sessions;
    this.scheduleShowing = 'all';
    this.searchQuery = '';
    this.favorites = [];
  }

  openSession(session) {
    this.nav.push(SessionDetailPage, session);
  }

  getSessionsForTheDay() {
    if (!this.searchQuery || this.searchQuery.trim() == '') {
      return this.sessionsForTheDay;
    }
    var talks = [];
    this.sessionsForTheDay.forEach((session) => {
      var matched = session.talks.filter((v) => {
        if(v.name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) >= 0) {
          return true;
        }
        return false;
      });
      if (matched.length > 0) {
        session.talks = matched;
        talks.push(session);
      }
    });
    return talks;
  }

  openScheduleFilter() {
    this.modal.open(SessionFilterPage);
  }
}
