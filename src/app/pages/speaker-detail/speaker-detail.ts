import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { NavParams } from '@ionic/angular';

import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-speaker-detail',
  templateUrl: 'speaker-detail.html',
  styleUrls: ['./speaker-detail.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SpeakerDetailPage {
  speaker: any;

  constructor(
    public dataProvider: ConferenceData,
    public navParams: NavParams,
    public router: Router
  ) { }

  ionViewWillEnter() {
    this.dataProvider.load().subscribe((data: any) => {
      if (data && data.speakers) {
        for (const speaker of data.speakers) {
          if (speaker && speaker.id === this.navParams.data.speakerId) {
            this.speaker = speaker;
            break;
          }
        }
      }
    });

  }

  goToSessionDetail(session: any) {
    this.router.navigateByUrl(`app/tabs/(schedule:session/${session.id})`);
  }
}
