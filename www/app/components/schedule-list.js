import {Component, NgIf, NgFor} from 'angular2/angular2';
import {Icon, Item, ItemGroup, ItemGroupTitle, ItemSliding, List, ListHeader, NavController, Platform, Popup} from 'ionic/ionic';
import {SessionDetail} from '../session-detail/session-detail';
import {SpeakerDetail} from '../speaker-detail/speaker-detail';
import {DataService} from '../service/data';
import {ConvertDate} from '../pipes/convert-date';
import {DateFormat} from '../components/date-format';

@Component({
  directives: [DateFormat, Icon, Item, ItemGroup, ItemGroupTitle, ItemSliding, List, ListHeader, NgFor, NgIf],
  properties: ['data', 'favorites', 'showing'],
  pipes: [ConvertDate],
  selector: 'schedule-list',
  templateUrl: 'app/components/schedule-list.html'
})
export class ScheduleList {
  constructor(nav: NavController, popup: Popup, dataService: DataService, platform: Platform) {
    this.nav = nav;
    this.popup = popup;
    this.dataService = dataService;
    this.platform = platform;
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
    this.nav.push(SessionDetail, session);
    if (event) {
      event.preventDefault();
    }
    return false;
  }

  openSpeakerDetail(speaker, event, slidingItem) {
    event.stopPropagation();
    event.preventDefault();
    this.nav.push(SpeakerDetail, speaker);
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
