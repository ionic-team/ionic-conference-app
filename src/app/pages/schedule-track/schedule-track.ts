import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';
import { Track } from '../../models';

@Component({
  selector: 'page-schedule-track',
  templateUrl: './schedule-track.html',
  styleUrls: ['./schedule-track.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ScheduleTrackPage implements AfterViewInit {
  tracks: Track[] = [];

  constructor(private dataProvider: ConferenceData,
              public modalCtrl: ModalController) { }

  ngAfterViewInit() {
    this.dataProvider.getTracks().subscribe(
      (tracks: Track[]) => { this.tracks = tracks; }
    );
  }

  applyTrack(name: string) {
    // Pass back a new array of track names to exclude
    const excludedTracks = [];
    this.tracks.forEach(
      (track) => { if (track.name !== name ) { excludedTracks.push(track.name); }
    });
    this.dismiss(excludedTracks);
  }

  dismiss(data: any) {
    // using the injected ModalController this page
    // can "dismiss" itself and pass back data
    this.modalCtrl.dismiss(data);
  }
}
