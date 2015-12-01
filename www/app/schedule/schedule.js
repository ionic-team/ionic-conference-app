import {NavController, Page, Searchbar, Modal} from 'ionic/ionic';
import {DataService} from '../service/data';
import {SessionDetailPage} from '../session-detail/session-detail';
import {SessionFilterPage} from '../session-filter/session-filter';
import {SessionList} from '../session-list/session-list';

@Page({
  templateUrl: 'app/schedule/schedule.html',
  directives: [SessionList, Searchbar]
})
export class SchedulePage {
  constructor(nav: NavController, dataService: DataService, modal: Modal) {
    this.nav = nav;
    this.modal = modal;
    this.dataService = dataService;
    this.sessions = this.dataService.getSchedule();
    this.scheduleShowing = 'all';
    this.searchQuery = '';
    this.favorites = [];
  }

  openSession(session) {
    this.nav.push(SessionDetailPage, session);
  }

  filterSessions(searchbar) {
    this.sessions = this.dataService.getSchedule();
    let query = searchbar.query;

    // If the query in the searchbar exists we want to filter
    // all of the session talks by it
    if (query && query.trim() != '') {
      // Filter the sessions based on the talk name
      this.sessions = this.sessions.filter((session) => {
        var matched = session.talks.filter((talk) => {
          return talk.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
        });

        return matched.length > 0;
      });
    }
  }

  openScheduleFilter() {
    this.modal.open(SessionFilterPage);
  }
}
