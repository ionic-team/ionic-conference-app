import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonText,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  cloudDownload,
  share,
  shareOutline,
  star,
  starOutline,
} from 'ionicons/icons';

import { Session } from '../../interfaces/conference.interfaces';
import { ConferenceService } from '../../providers/conference.service';
import { UserService } from '../../providers/user.service';

@Component({
    selector: 'page-session-detail',
    styleUrls: ['./session-detail.scss'],
    templateUrl: 'session-detail.html',
    imports: [
        IonHeader,
        IonToolbar,
        IonButtons,
        IonBackButton,
        IonContent,
        IonButton,
        IonIcon,
        IonList,
        IonItem,
        IonLabel,
        IonText,
    ]
})
export class SessionDetailPage {
  private confService = inject(ConferenceService);
  private userService = inject(UserService);
  private route = inject(ActivatedRoute);

  session: Session;
  isFavorite = false;
  defaultHref = '';

  constructor() {
    addIcons({ shareOutline, starOutline, star, cloudDownload, share });
  }

  ionViewWillEnter() {
    this.confService.load().subscribe(data => {
      if (
        data &&
        data.schedule &&
        data.schedule[0] &&
        data.schedule[0].groups
      ) {
        const sessionId = this.route.snapshot.paramMap.get('sessionId');
        for (const group of data.schedule[0].groups) {
          if (group && group.sessions) {
            for (const session of group.sessions) {
              if (session && session.id === sessionId) {
                this.session = session;

                this.isFavorite = this.userService.hasFavorite(
                  this.session.name
                );

                break;
              }
            }
          }
        }
      }
    });
  }

  ionViewDidEnter() {
    this.defaultHref = '/app/tabs/schedule';
  }

  sessionClick(item: string) {
    console.log('Clicked', item);
  }

  toggleFavorite() {
    const sessionName = this.session.name;
    if (this.userService.hasFavorite(sessionName)) {
      this.userService.removeFavorite(sessionName);
      this.isFavorite = false;
    } else {
      this.userService.addFavorite(this.session.name);
      this.isFavorite = true;
    }
  }

  shareSession() {
    console.log('Clicked share session');
  }
}
