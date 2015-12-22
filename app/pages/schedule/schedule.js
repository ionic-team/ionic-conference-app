import {IonicApp, Page, Modal, Popup, NavController} from 'ionic/ionic';
import {ConferenceData} from '../../providers/conference-data';
import {UserData} from '../../providers/user-data';
import {ScheduleFilterPage} from '../schedule-filter/schedule-filter';
import {SessionDetailPage} from '../session-detail/session-detail';


@Page({
  templateUrl: 'build/pages/schedule/schedule.html'
})
export class SchedulePage {
  constructor(app: IonicApp, modal: Modal, popup: Popup, nav: NavController, confData: ConferenceData, user: UserData) {
    this.app = app;
    this.modal = modal;
    this.popup = popup;
    this.nav = nav;
    this.confData = confData;
    this.user = user;

    this.dayIndex = 0;
    this.queryText = '';
    this.excludeTracks = [];
    this.filterTracks = [];
    this.segment = 'all';

    this.hasSessions = false;
    this.groups = [];

    this.updateSchedule();
  }

  onPageDidEnter() {
    this.app.setTitle('Schedule');
  }

  updateSchedule() {
    this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).then(data => {
      this.shownSessions = data.shownSessions;
      this.groups = data.groups;
    });
  }

  openFilter() {
    this.modal.open(ScheduleFilterPage, this.excludeTracks).then(modalRef => {
      modalRef.onClose = (excludeTracks) => {
        if (excludeTracks) {
          this.excludeTracks = excludeTracks;
          this.updateSchedule();
        }
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
      }, () => {
        
        slidingItem.close();
      });

    } else {
      // remember this session as a user favorite
      this.user.addFavorite(sessionData.name);

      this.popup.alert('Favorite added').then(() => {
        // close the sliding item and hide the option buttons
        slidingItem.close();
      });
    }

  }

}
