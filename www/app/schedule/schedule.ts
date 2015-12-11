import {IonicApp, Page, Modal} from 'ionic-framework/ionic';
import {ConferenceData} from '../providers/conference-data';
import {ScheduleFilterPage} from '../schedule-filter/schedule-filter';


@Page({
  templateUrl: 'app/schedule/schedule.html'
})
export class SchedulePage {
  constructor(app: IonicApp, modal: Modal, confData: ConferenceData) {
    this.app = app;
    this.modal = modal;
    this.confData = confData;

    this.data = {
      hasSessions: false
    };

    this.dayIndex = 0;
    this.queryText = '';
    this.excludeTracks = [];
    this.segment = 'all';

    this.updateSchedule();
  }

  onPageDidEnter() {
    this.app.setTitle('Schedule');
  }

  updateSchedule() {
    this.confData.getTimeline(this.dayIndex).then(data => {
      this.data = data;
    });
  }

  onQueryFilter() {
    console.log(this.filterQueryText);
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
