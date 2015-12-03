import {NavController, Page, ActionSheet} from 'ionic-framework/ionic';
import {ConferenceData} from '../providers/conference-data';
import {SpeakerDetailPage} from '../speaker-detail/speaker-detail';
import {SessionDetailPage} from '../session-detail/session-detail';


@Page({
  templateUrl: 'app/speaker-list/speaker-list.html'
})
export class SpeakerListPage {
  constructor(nav: NavController, confData: ConferenceData, actionSheet: ActionSheet) {
    this.nav = nav;
    this.confData = confData;
    this.actionSheet = actionSheet;

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
    this.actionSheet.open({
      buttons: [
        { text: 'Copy Link' },
        { text: 'Share via ...' },
      ],
      titleText: 'Share ' + speaker.name,
      cancelText: 'Cancel',
      cancel: () => {},
      buttonClicked: (index) => {
        switch (index){
          case 0 :
            // TODO
            return true;

          case 1 :
            // TODO
            return true;
        }
      }
    });
  }
}
