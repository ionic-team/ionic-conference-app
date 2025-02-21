import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonAvatar,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Speaker } from '../../interfaces/conference.interfaces';
import { ConferenceService } from '../../providers/conference.service';

@Component({
    selector: 'page-speaker-list',
    templateUrl: 'speaker-list.html',
    styleUrls: ['./speaker-list.scss'],
    imports: [
        IonHeader,
        IonToolbar,
        IonButtons,
        IonMenuButton,
        IonTitle,
        IonContent,
        IonGrid,
        IonRow,
        IonCol,
        IonCard,
        IonCardHeader,
        IonItem,
        IonAvatar,
        IonLabel,
        IonCardContent,
        IonList,
        RouterLink,
    ]
})
export class SpeakerListPage {
  private confData = inject(ConferenceService);

  speakers: Speaker[] = [];

  ionViewDidEnter() {
    this.confData.getSpeakers().subscribe(speakers => {
      this.speakers = speakers;
    });
  }
}
