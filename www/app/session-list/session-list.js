import {Component, NgIf, NgFor} from 'angular2/angular2';
import {Config, Icon, Item, ItemSliding, List, ListHeader, NavController, Popup} from 'ionic/ionic';
import {SessionDetailPage} from '../session-detail/session-detail';
import {SpeakerDetailPage} from '../speaker-detail/speaker-detail';
import {DataService} from '../service/data';
import {DateFormat} from '../date-format/date-format';

@Component({
  selector: 'session-list',
  directives: [DateFormat, Icon, Item, ItemSliding, List, ListHeader, NgFor, NgIf],
  properties: ['data', 'favorites', 'showing'],
  templateUrl: 'app/session-list/session-list.html'
})
export class SessionList {
  constructor(nav: NavController, popup: Popup, config: Config, dataService: DataService) {
    this.nav = nav;
    this.popup = popup;
    this.dataService = dataService;
    this.config = config;

    this.isMD = this.config.get('mode') == 'md';
  }

  addFavorite(timeSlot, session, event, slidingItem) {
    var currTimeSlot,
        added = false;

    this.favorites.forEach(function(t) {
      if (t.time == timeSlot.time) {
        currTimeSlot = t;
      }

      // Loop through existing talks to make sure
      // this one isn't added already
      t.talks.forEach(function(talk) {
        if (talk == session) {
          added = true;
        }
      })
    });

    if (added == false) {
      if (!currTimeSlot) {
        currTimeSlot = { time: timeSlot.time, talks:[] };
        currTimeSlot.talks.push(session);
        this.favorites.push(currTimeSlot);
      } else {
        currTimeSlot.talks.push(session);
      }
    } else {
      this.alertFavoriteExists();
    }

    event.preventDefault();
    event.stopPropagation();
    slidingItem.close();
    return false;
  }

  alertFavoriteExists() {
    this.popup.alert({
      title: "Oops",
      template: "That session has been favorited already.",
    });
  }

  openSession(session, val, event) {
    this.nav.push(SessionDetailPage, session);
    if (event) {
      event.preventDefault();
    }
    return false;
  }

  openSpeakerDetail(speaker, event, slidingItem) {
    event.stopPropagation();
    event.preventDefault();
    this.nav.push(SpeakerDetailPage, speaker);
    slidingItem.close();
  }

  showTimeSlot(timeSlot) {
    var filteredTimeSlot = [];

    timeSlot.forEach((time) => {
      let filteredTalks = [];
      // Filter the talks by category
      time.talks.forEach((talk) => {
        if (this.dataService.showCategory(talk.category)) {
          filteredTalks.push(talk);
        }
      });
      // Only push the this time slot if talks exist
      if (filteredTalks.length > 0 ) {
        filteredTimeSlot.push({
          talks: filteredTalks,
          time: time.time
        });
      }
    });

    return filteredTimeSlot;
  }
}
