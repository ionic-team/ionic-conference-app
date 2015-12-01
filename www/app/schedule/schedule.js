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

  filterSessions() {
    // TODO searchQuery doesn't get updated before this function is called
    // so we have to wrap it in a timeout
    setTimeout(() => {
      this.sessions = this.dataService.getSchedule();

      // If searchQuery exists we want to trim it, otherwise set it to an empty string
      this.searchQuery ? this.searchQuery = this.searchQuery.trim() : this.searchQuery = '';

      // Filter the sessions based on the talk name and whether the category is showing
      this.sessions = this.sessions.filter((session) => {
        var matched = session.talks.filter((talk) => {
          return (this.dataService.showCategory(talk.category) && talk.name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1);
        });

        return matched.length > 0;
      });
    });
  }

  openScheduleFilter() {
    this.modal.open(SessionFilterPage).then(modalRef => {
      // modalRef is a reference to the modal instance
      modalRef.onClose = (modalData) => {
        // If the modalData is true we want to update sessions
        if (modalData) {
          this.filterSessions();
        }
      }
    });
  }
}
