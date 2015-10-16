import {IonicApp, NavController, Page} from 'ionic/ionic';
import {DataService} from '../service/data';
import {Http, HTTP_BINDINGS} from "angular2/http";
import {DateFormat} from '../components/date-format';
import {SpeakerDetailPage} from '../speaker-detail/speaker-detail';
import {SessionDetailPage} from '../session-detail/session-detail';

@Page({
  templateUrl: 'app/speakers/speakers.html',
  providers: [DataService],
  directives: [DateFormat]
})

export class SpeakersPage {
  constructor(nav: NavController, app: IonicApp, data: DataService) {
    this.nav = nav;
    console.log('this.nav', this.nav);
    this.speakers = null;
    this.scheduleInfo = null;
    this.dataService = data;
  }

  onInit() {
    this.scheduleInfo = this.dataService.getSchedule();
    let speakerList = this.speakers = this.dataService.getSpeakers();
    let talks = [];
    let speakers = [];
    this.scheduleInfo.map(function(dayItem) {
      dayItem.sessions.map(function(sessionItem) {
        sessionItem.talks.map(function(talkItem) {
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
}
