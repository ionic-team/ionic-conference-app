import {IonicApp, Page, Modal, Alert, NavController} from 'ionic-framework/ionic';
import {ConferenceData} from '../../providers/conference-data';
import {UserData} from '../../providers/user-data';
import {ScheduleFilterPage} from '../schedule-filter/schedule-filter';
import {SessionDetailPage} from '../session-detail/session-detail';


@Page({
  templateUrl: 'build/pages/schedule/schedule.html'
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
  filterTracks = [];
  shownSessions = [];
  groups = [];

  filterQueryText: any;
  user: any;

  constructor(app: IonicApp, nav: NavController, confData: ConferenceData, user: UserData) {
    this.app = app;
    this.nav = nav;
    this.confData = confData;
    this.user = user;

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

  presentFilter() {
    let modal = Modal.create(ScheduleFilterPage, this.excludeTracks);
    modal.onDismiss(data => {
      if (data) {
        this.excludeTracks = data;
        this.updateSchedule();
      }
    });
    this.nav.present(modal);
  }

  goToSessionDetail(sessionData) {
    // go to the session detail page
    // and pass in the session data
    this.nav.push(SessionDetailPage, sessionData);
  }

  addFavorite(slidingItem, sessionData) {

    if (this.user.hasFavorite(sessionData.name)) {
      // woops, they already favorited it! What shall we do!?
      // create an alert instance
      let alert = Alert.create({
        title: 'Favorite already added',
        message: 'Would you like to remove this session from your favorites?',
        buttons: [
          {
            text: 'Cancel',
            handler: () => {
              // they clicked the cancel button, do not remove the session
              // close the sliding item and hide the option buttons
              slidingItem.close();
            }
          },
          {
            text: 'Remove',
            handler: () => {
              // they want to remove this session from their favorites
              this.user.removeFavorite(sessionData.name);

              // close the sliding item and hide the option buttons
              slidingItem.close();
            }
          }
        ]
      });
      // now present the alert on top of all other content
      this.nav.present(alert);

    } else {
      // remember this session as a user favorite
      this.user.addFavorite(sessionData.name);

      // create an alert instance
      let alert = Alert.create({
        title: 'Favorite Added',
        buttons: [{
          text: 'OK',
          handler: () => {
            // close the sliding item
            slidingItem.close();
          }
        }
      });
      // now present the alert on top of all other content
      this.nav.present(alert);
    }

  }

}
