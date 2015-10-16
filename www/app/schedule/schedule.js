import {IonicApp, NavController, Page, SearchBar, Modal} from 'ionic/ionic';
import {DataService} from '../service/data';
import {DateFormat} from '../components/date-format';
import {SessionDetailPage} from '../session-detail/session-detail';
import {FORM_DIRECTIVES, FormBuilder, Validators, Control, ControlGroup} from 'angular2/angular2';
import {NgControl} from 'angular2/angular2';
import {ScheduleList} from '../components/schedule-list';

@Page({
  templateUrl: 'app/schedule/schedule.html',
  providers: [DataService, NgControl],
  directives: [DateFormat, FORM_DIRECTIVES, ScheduleList, SearchBar]
})

export class SchedulePage {
  constructor(nav: NavController, app: IonicApp, data: DataService, fb: FormBuilder, modal: Modal) {
    this.nav = nav;
    this.modal = modal;
    this.schedule = data.getSchedule();
    this.index = 0;
    // this.scheduleForTheDay = this.schedule[0];
    this.sessionsForTheDay = this.schedule[0].sessions;

    this.scheduleForm = fb.group({
      scheduleShowing: ['all', Validators.required]
    });
    this.searchQuery = '';
    // this.searchForm = fb.group({
    //   searchQuery: ['', Validators.required]
    // });

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

  cancelSearch() {
    console.log('cancelSearch stuffs');
  }

  getSessionsForTheDay() {
    //console.log('getSessionsForTheDay this.searchQuery', this.searchQuery);
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
    console.log("opening modal");
    this.modal.open(ScheduleFilterModal);
  }
}

@Page({
  templateUrl: 'app/modals/filter-schedule-modal.html',
  providers: [DataService]
})
export class ScheduleFilterModal {
  constructor(data: DataService) {
    this.categories = data.getCategories();


  }

  resetFilters() {
    console.log("Resetting filters");
  }

  applyFilters() {
    console.log("Apply filters");
  }
}
