import {NavController, Page, ActionSheet} from 'ionic/ionic';
import {DataService} from '../service/data';
import {SpeakerDetailPage} from '../speaker-detail/speaker-detail';
import {SessionDetailPage} from '../session-detail/session-detail';

@Page({
  templateUrl: 'app/speaker-list/speaker-list.html'
})
export class SpeakerListPage {
  constructor(nav: NavController, dataService: DataService, actionSheet: ActionSheet) {
    this.nav = nav;
    this.speakers = null;
    this.scheduleInfo = null;
    this.dataService = dataService;
    this.actionSheet = actionSheet;
  }

  onInit() {
    this.scheduleInfo = this.dataService.getSchedule();
    let speakerList = this.speakers = this.dataService.getSpeakers();
    let talks = [];
    let speakers = [];

    this.scheduleInfo.map(dayItem => {
      dayItem.sessions.map(sessionItem => {
        sessionItem.talks.map(talkItem => {
          talks.push(talkItem.name);

          if (talkItem.speaker) {
            let speakerSession = speakerList.find(x => x.name == talkItem.speaker);
            if (speakerSession) {
              speakerSession.sessions = speakerSession.sessions || [];
              speakerSession.sessions.push(talkItem);
            }
            if (speakers.indexOf(talkItem.speaker) == -1) {
              speakers.push(talkItem.speaker);
            }
          }

        });
      });
    });

    this.talks = talks;
    this.speakersNames = speakers;
  }

  openSession(session) {
    this.nav.push(SessionDetailPage, session);
  }

  openSpeakerDetail(speakerName) {
    this.nav.push(SpeakerDetailPage, speakerName);
  }

  openSpeakerTwitter(speaker) {
    window.open(speaker.twitter);
  }

  openShareSpeaker(speaker) {
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
            // waiting for the platform wrapper to be reorganized
            // http://ngcordova.com/docs/plugins/clipboard/
            return true;
          case 1 :
            // TODO
            // waiting for the platform wrapper to be reorganized
            // http://ngcordova.com/docs/plugins/socialSharing/
            return true;
        }
      }
    }).then(actionSheetRef => {
      this.actionSheetRef = actionSheetRef;
      // this.actionSheetRef.close() to close it
    })
  }
}
