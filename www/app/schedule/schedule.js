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
    this.dataService.updateSessions(searchbar.query);
  }

  openScheduleFilter() {
    this.modal.open(SessionFilterPage);
  }
}
