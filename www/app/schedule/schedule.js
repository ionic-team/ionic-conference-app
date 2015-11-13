import {NavController, Page, SearchBar, Modal} from 'ionic/ionic';
import {DataService} from '../service/data';
import {SessionDetailPage} from '../session-detail/session-detail';
import {FilterScheduleModal} from '../modals/filter-schedule-modal';
import {ScheduleList} from '../components/schedule-list';

@Page({
  templateUrl: 'app/schedule/schedule.html',
  directives: [ScheduleList, SearchBar]
})
export class SchedulePage {
  constructor(nav: NavController, dataService: DataService, modal: Modal) {
    this.nav = nav;
    this.modal = modal;
    this.schedule = dataService.getSchedule();
    this.index = 0;
    this.sessionsForTheDay = this.schedule[0].sessions;
    this.scheduleShowing = 'all';
    this.searchQuery = '';
    this.favorites = [];
  }

  nextDay(index) {
    let newIndex = index + 1;
    if (newIndex >= this.schedule.length) {
      return;
    }

    this.scheduleForTheDay = this.schedule[newIndex];
    this.index = newIndex;
    this.sessionsForTheDay = this.scheduleForTheDay.sessions;
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
    this.modal.open(FilterScheduleModal);
  }
}
