import {Component} from 'angular2/angular2';
import {Config, NavController, Popup, Item, ItemSliding, List, Button} from 'ionic-framework/ionic';
import {ConferenceData} from '../providers/conference-data';
import {UserData} from '../providers/user-data';
import {DatePipe} from '../pipes/date';
import {SessionDetailPage} from '../session-detail/session-detail';


@Component({
  selector: 'timeline',
  inputs: ['dayIndex', 'queryText', 'tracks', 'segment'],
  templateUrl: 'app/timeline/timeline.html',
  directives: [Item, ItemSliding, List, Button],
  pipes: [DatePipe]
})
export class Timeline {
  constructor(nav: NavController, popup: Popup, config: Config, confData: ConferenceData, user: UserData) {
    this.nav = nav;
    this.popup = popup;
    this.confData = confData;
    this.user = user;

    this.isMD = config.get('mode') == 'md' ? '' : null;
  }

  ngAfterContentCheck() {
    this.confData.getTimeline(this.dayIndex, this.queryText, this.tracks, this.segment).then(data => {
      this.data = data;
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
