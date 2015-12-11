import {IonicApp, Page, Modal, Popup, NavController} from 'ionic-framework/ionic';
import {ConferenceData} from '../providers/conference-data';
import {UserData} from '../providers/user-data';
import {ScheduleFilterPage} from '../schedule-filter/schedule-filter';
import {SessionDetailPage} from '../session-detail/session-detail';


@Page({
  templateUrl: 'app/schedule/schedule.html'
})
export class SchedulePage {
  app: any;
  modal: any;
  popup: any;
  confData: any;
  nav: any;

  data = {
    hasSessions: false
  };
  dayIndex = 0;
  queryText = '';
  excludeTracks = [];
  segment = 'all';

  filterQueryText: any;
  filterTracks: any;
  user: any;

  constructor(app: IonicApp, modal: Modal, popup: Popup, nav: NavController, confData: ConferenceData, user: UserData) {
    this.app = app;
    this.modal = modal;
    this.popup = popup;
    this.nav = nav;
    this.confData = confData;
    this.user = user;

    this.updateSchedule();
  }

  onPageDidEnter() {
    this.app.setTitle('Schedule');
  }

  updateSchedule() {
    this.confData.getTimeline(this.dayIndex, this.queryText).then(data => {
      this.data = data;
    });
  }

  openFilter() {
    this.modal.open(ScheduleFilterPage, this.filterTracks).then(modalRef => {

      modalRef.onClose = (filteredTracks) => {
        this.filterTracks = filteredTracks;
      };

    });
  }

  goToSessionDetail(sessionData) {
    // go to the session detail page
    // and pass in the session data
    this.nav.push(SessionDetailPage, sessionData);
  }

  addFavorite(slidingItem, sessionData) {

    if (this.user.hasFavorite(sessionData.name)) {
      // woops, they already favorited it! What shall we do!?
      this.popup.confirm({
        title: 'Favorite already added',
        template: 'Would you like to remove this session from your favorites?',
        okText: 'Remove',
        cancelText: 'Cancel'
      }).then(() => {
        // they want to remove this session from their favorites
        this.user.removeFavorite(sessionData.name);

        // close the sliding item and hide the option buttons
        slidingItem.close();
      });

    } else {
      // remember this session as a user favorite
      this.user.addFavorite(sessionData.name);

      // close the sliding item and hide the option buttons
      slidingItem.close();
    }

  }

}
