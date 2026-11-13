import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ActionSheetController,
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
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { cloudDownload, share, shareOutline, star, starOutline } from 'ionicons/icons';

import type { Session } from '../../interfaces/conference.interfaces';
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
  ],
  providers: [ActionSheetController],
})
export class SessionDetailPage {
  private confService = inject(ConferenceService);
  private userService = inject(UserService);
  private route = inject(ActivatedRoute);
  private actionSheetCtrl = inject(ActionSheetController);

  session = signal<Session | undefined>(undefined);
  isFavorite = signal(false);
  defaultHref = signal('');

  constructor() {
    addIcons({ shareOutline, starOutline, star, cloudDownload, share });
  }

  ionViewWillEnter(): void {
    this.confService.load().subscribe((data) => {
      if (data && data.schedule && data.schedule[0] && data.schedule[0].groups) {
        const sessionId = this.route.snapshot.paramMap.get('sessionId');
        for (const group of data.schedule[0].groups) {
          if (group && group.sessions) {
            for (const session of group.sessions) {
              if (session && session.id === sessionId) {
                this.session.set(session);

                this.isFavorite.set(this.userService.hasFavorite(session.name));

                break;
              }
            }
          }
        }
      }
    });
  }

  ionViewDidEnter(): void {
    this.defaultHref.set('/app/tabs/schedule');
  }

  sessionClick(item: string): void {
    console.log('Clicked', item);
  }

  toggleFavorite(): void {
    const sessionName = this.session()?.name;
    if (!sessionName) {
      return;
    }
    if (this.userService.hasFavorite(sessionName)) {
      this.userService.removeFavorite(sessionName);
      this.isFavorite.set(false);
    } else {
      this.userService.addFavorite(sessionName);
      this.isFavorite.set(true);
    }
  }

  async shareSession(): Promise<void> {
    const session = this.session();
    if (!session) {
      return;
    }
    const link = window.location.href;

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Share ' + session.name,
      buttons: [
        {
          text: 'Copy Link',
          handler: () => {
            console.log('Copy link clicked on ' + link);
            if ((window as any).cordova && (window as any).cordova.plugins.clipboard) {
              (window as any).cordova.plugins.clipboard.copy(link);
            }
          },
        },
        {
          text: 'Share via ...',
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    });

    await actionSheet.present();
  }
}
