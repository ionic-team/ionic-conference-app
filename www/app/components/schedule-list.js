import {Component, NgIf, NgFor} from 'angular2/angular2';
import {Icon, Item, ItemGroup, ItemGroupTitle, ItemSliding, List, ListHeader, NavController, Popup} from 'ionic/ionic';
import {SessionDetailPage} from '../session-detail/session-detail';
import {SpeakerDetailPage} from '../speaker-detail/speaker-detail';
import {DataService} from '../service/data';
import {ConvertDate} from '../pipes/convert-date';

@Component({
  directives: [Icon, Item, ItemGroup, ItemGroupTitle, ItemSliding, List, ListHeader, NgFor, NgIf],
  properties: ['data', 'favorites', 'showing'],
  providers: [DataService],
  pipes: [ConvertDate],
  selector: 'schedule-list',
  templateUrl: 'app/components/schedule-list.html'
})
export class ScheduleList {
  constructor(nav: NavController, popup: Popup, dataService: DataService) {
    this.nav = nav;
    this.popup = popup;
    this.categories = dataService.getCategories();
  }

  addFavorite(timeSlot, session, event) {
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

  openSpeakerDetail(speaker, event) {
    event.stopPropagation();
    event.preventDefault();
    this.nav.push(SpeakerDetailPage, speaker);
    return false;
  }

  showSession(session) {
    // TODO show the session if the category showFilter is true
    // return categoryShowFilter;
  }
}
