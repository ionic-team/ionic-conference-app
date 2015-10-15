import {View, Component, NgIf, NgFor} from 'angular2/angular2';
import {Icon, Item, ItemGroup, ItemGroupTitle, ItemSliding, List, ListHeader, NavController, Popup} from 'ionic/ionic';
import {SessionDetailPage} from '../session-detail/session-detail';
import {SpeakerDetailPage} from '../speaker-detail/speaker-detail';
import {DateFormat} from '../components/date-format';

@Component({
  selector: 'schedule-list',
  properties: ['data', 'favorites', 'showing']
})

@View({
  templateUrl: 'app/components/schedule-list.html',
  directives: [DateFormat, Icon, Item, ItemGroup, ItemGroupTitle, ItemSliding, List, ListHeader, NgFor, NgIf]
})

export class ScheduleList {
  constructor(nav: NavController, popup: Popup) {
    console.log('this.data', this.data);
    this.nav = nav;
    this.popup = popup;
  }

  addFavorite(timeSlot, session, event) {
    //console.log('timeslot:', timeSlot, 'add session', session, event);

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

    // console.log('currTimeSlot', currTimeSlot);
    // console.log('favorites', this.favorites);
    event.preventDefault();
    event.stopPropagation();
    return false;
  }

  alertFavoriteExists() {
    this.popup.alert({
      title: "Oops",
      template: "That talk has been favorited already.",
    }).then((response) => {
     console.log('entry', response);
    };
  }

  openSession(session, val, event) {
    console.log('val for this', val, session, event);
    this.nav.push(SessionDetailPage, session);
    if (event) {
      event.preventDefault();
    }
    return false;
  }

  openSpeakerDetail(speaker, event) {
    console.log('open speaker detail', speaker, event);
    event.stopPropagation();
    event.preventDefault();
    this.nav.push(SpeakerDetailPage, speaker);
    return false;
  }
}
