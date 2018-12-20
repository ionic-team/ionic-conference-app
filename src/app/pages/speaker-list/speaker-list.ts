import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController, AlertController } from '@ionic/angular';

import { Speaker } from '../../models';
import { SpeakerData } from '../../providers/speaker-data';

@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html',
  styleUrls: ['./speaker-list.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SpeakerListPage implements OnInit {
  speakers: Speaker[];

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    private speakerProvider: SpeakerData,
    public inAppBrowser: InAppBrowser,
    public router: Router
  ) {}

  ngOnInit() {
    this.speakerProvider.getSpeakers().subscribe(
      speakers => { this.speakers = speakers; }
    );
  }

  ionViewDidEnter() {
    // this.dataProvider.getSpeakers().subscribe((speakers: any[]) => {
    //   this.speakers = speakers;
    // });
  }

  goToSpeakerTwitter(speaker: any) {
    this.inAppBrowser.create(
      `https://twitter.com/${speaker.twitter}`,
      '_blank'
    );
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
              (window as any)['cordova'] &&
              (window as any)['cordova'].plugins.clipboard
            ) {
              (window as any)['cordova'].plugins.clipboard.copy(
                'https://twitter.com/' + speaker.twitter
              );
            }
          }
        },
        {
          text: 'Share via ...'
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }

  async openContact(speaker: any) {
    const mode = 'ios'; // this.config.get('mode');

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Contact ' + speaker.name,
      buttons: [
        {
          text: `Email ( ${speaker.email} )`,
          icon: mode !== 'ios' ? 'mail' : null,
          handler: () => {
            window.open('mailto:' + speaker.email);
          }
        },
        {
          text: `Call ( ${speaker.phone} )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + speaker.phone);
          }
        }
      ]
    });

    await actionSheet.present();
  }

  async addNewSpeaker() {
    // this.succeed = false;
    const changeForm = await this.alertCtrl.create({
      header: 'Change Password',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (data: any) => {
            // if (this.user.password !== data.currentPW) {
            //   alert('Current password does not match your password.');
            // } else if (data.newPW.length < 4) {
            //   alert('Password should be more than 3 characters.');
            // } else if (data.newPW !== data.confirmPW) {
            //   alert('New password does not match Confirm password.');
            // } else {
            //   this.user.password = data.newPW;
            //   this.userData.updateUser(this.user);
            //   this.succeed = true;
            //   this.jobDescription = 'Password has been changed.';
            // }
          }
        }
      ],
      inputs: [
        {
          type: 'password',
          name: 'newPW',
          placeholder: 'new password'
        },
        {
          type: 'password',
          name: 'confirmPW',
          placeholder: 'confirm password'
        },
        {
          type: 'password',
          name: 'currentPW',
          placeholder: 'current password'
        }
      ]
    });
    await changeForm.present();
  }

}
