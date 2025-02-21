import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import {
  ActionSheetController,
  IonBackButton,
  IonButton,
  IonButtons,
  IonChip,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  callOutline,
  callSharp,
  logoGithub,
  logoInstagram,
  logoTwitter,
  shareOutline,
  shareSharp,
} from 'ionicons/icons';
import { Speaker } from '../../interfaces/conference.interfaces';
import { ConferenceService } from '../../providers/conference.service';

@Component({
    selector: 'page-speaker-detail',
    templateUrl: 'speaker-detail.html',
    styleUrls: ['./speaker-detail.scss'],
    imports: [
        IonContent,
        IonHeader,
        IonToolbar,
        IonButtons,
        IonBackButton,
        IonButton,
        IonIcon,
        IonChip,
        IonLabel,
        NgOptimizedImage,
    ],
    providers: [InAppBrowser, ActionSheetController]
})
export class SpeakerDetailPage {
  speaker: Speaker;

  private confService = inject(ConferenceService);
  private route = inject(ActivatedRoute);
  private actionSheetCtrl = inject(ActionSheetController);
  private inAppBrowser = inject(InAppBrowser);

  constructor() {
    addIcons({
      callOutline,
      callSharp,
      shareOutline,
      shareSharp,
      logoTwitter,
      logoGithub,
      logoInstagram,
    });
  }

  ionViewWillEnter() {
    this.confService.load().subscribe(data => {
      const speakerId = this.route.snapshot.paramMap.get('speakerId');
      if (data && data.speakers) {
        for (const speaker of data.speakers) {
          if (speaker && speaker.id === speakerId) {
            this.speaker = speaker;
            break;
          }
        }
      }
    });
  }

  openExternalUrl(url: string) {
    this.inAppBrowser.create(url, '_blank');
  }

  async openSpeakerShare(speaker: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Share ' + speaker.name,
      buttons: [
        {
          text: 'Copy Link',
          handler: () => {
            console.log(
              'Copy link clicked on https://twitter.com/' + speaker.twitter
            );
            if (
              (window as any).cordova &&
              (window as any).cordova.plugins.clipboard
            ) {
              (window as any).cordova.plugins.clipboard.copy(
                'https://twitter.com/' + speaker.twitter
              );
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

  async openContact(speaker: Speaker) {
    const mode = 'ios'; // this.config.get('mode');

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Contact ' + speaker.name,
      buttons: [
        {
          text: `Email ( ${speaker.email} )`,
          icon: mode !== 'ios' ? 'mail' : null,
          handler: () => {
            window.open('mailto:' + speaker.email);
          },
        },
        {
          text: `Call ( ${speaker.phone} )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + speaker.phone);
          },
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
