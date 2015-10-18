import {NavController, Page, SearchBar, Modal} from 'ionic/ionic';
import {DataService} from '../service/data';
import {SessionDetailPage} from '../session-detail/session-detail';
import {FormBuilder, Validators} from 'angular2/angular2';
import {NgControl} from 'angular2/angular2';
import {ScheduleList} from '../components/schedule-list';

@Page({
  templateUrl: 'app/schedule/schedule.html',
  providers: [DataService, NgControl],
  directives: [ScheduleList, SearchBar]
})
export class SchedulePage {
  constructor(nav: NavController, data: DataService, fb: FormBuilder, modal: Modal) {
    this.nav = nav;
    this.modal = modal;
    this.schedule = data.getSchedule();
    this.index = 0;
    this.sessionsForTheDay = this.schedule[0].sessions;
    this.scheduleForm = fb.group({
      scheduleShowing: ['all', Validators.required]
    });
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

  onInit() {
    // On Init reset the filters back to the last thing the user had
    this.categories.forEach((category) => {
      category.filterToApply = category.showFilter;
    });
  }

  resetFilters() {
    this.categories.forEach((category) => {
      category.filterToApply =  true;
    });
  }

  applyFilters() {
    this.categories.forEach((category) => {
      category.showFilter = category.filterToApply;
    });

    this.close();
  }
}
