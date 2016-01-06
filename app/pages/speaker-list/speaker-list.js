import {NavController, Page, ActionSheet} from 'ionic/ionic';
import {ConferenceData} from '../../providers/conference-data';
import {SpeakerDetailPage} from '../speaker-detail/speaker-detail';
import {SessionDetailPage} from '../session-detail/session-detail';


@Page({
  templateUrl: 'build/pages/speaker-list/speaker-list.html'
})
export class SpeakerListPage {
  constructor(nav: NavController, confData: ConferenceData) {
    this.nav = nav;
    this.confData = confData;
    this.speakers = [];

    confData.getSpeakers().then(speakers => {
      this.speakers = speakers;
    });
  }

  goToSessionDetail(session) {
    this.nav.push(SessionDetailPage, session);
  }

  goToSpeakerDetail(speakerName) {
    this.nav.push(SpeakerDetailPage, speakerName);
  }

  goToSpeakerTwitter(speaker) {
    window.open(`https://twitter.com/${speaker.twitter}`);
  }

  openSpeakerShare(speaker) {
    let actionSheet = ActionSheet.create({
      title: 'Share ' + speaker.name,
      buttons: [
        {
          text: 'Copy Link',
          handler: () => {
            console.log("Copy link clicked on https://twitter.com/" + speaker.twitter);
            if (window.cordova && window.cordova.plugins.clipboard) {
              window.cordova.plugins.clipboard.copy("https://twitter.com/" + speaker.twitter);
            }
          }
        },
        {
          text: 'Share via ...',
          handler: () => {
            console.log("Share via clicked");
          }
        },
        {
          text: 'Cancel',
          style: 'cancel',
          handler: () => {
            console.log("Cancel clicked");
          }
        },
      ]
    });

    this.nav.present(actionSheet);
  }
}
