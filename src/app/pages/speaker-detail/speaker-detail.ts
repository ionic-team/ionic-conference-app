import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { SpeakerData } from '../../providers/speaker-data';
import { Speaker } from '../../models';

@Component({
  selector: 'page-speaker-detail',
  templateUrl: 'speaker-detail.html',
  styleUrls: ['./speaker-detail.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SpeakerDetailPage {
  speaker: Speaker;

  constructor(
    private speakerProvider: SpeakerData,
    private router: Router,
    private route: ActivatedRoute,
    public inAppBrowser: InAppBrowser
  ) {}

  ionViewWillEnter() {
    const id = this.route.snapshot.paramMap.get('speakerId');
    this.speakerProvider.getSpeaker(id)
      .then( data => { this.speaker = data; }
    );
  }

  goToSessionDetail(session: any) {
    this.router.navigateByUrl(`app/tabs/(schedule:session/${session.id})`);
  }

  goToSpeakerTwitter() {
    this.inAppBrowser.create(
      `https://twitter.com/${this.speaker.twitter}`,
      '_blank'
    );
  }

  goToSpeakergithub() {
    this.inAppBrowser.create(
      `https://github.com/${this.speaker.github}`,
      '_blank'
    );
  }

  goToSpeakerInstagram() {
    this.inAppBrowser.create(
      `https://instagram.com/${this.speaker.instagram}`,
      '_blank'
    );
  }
}
