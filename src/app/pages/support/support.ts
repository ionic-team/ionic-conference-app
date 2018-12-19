import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';

import { AlertController, ToastController } from '@ionic/angular';
import { UserData } from '../../providers/user-data';
import { SupportData } from '../../providers/support-data';

@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
  styleUrls: ['./support.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SupportPage {
  isLoggedIn = false;
  submitted = false;
  supportMessage: string;

  constructor(public alertCtrl: AlertController,
              public toastCtrl: ToastController,
              private userData: UserData,
              private supportData: SupportData,
              public storage: Storage) {
  }

  async ionViewDidEnter() {
    this.userData.isLoggedIn()
      .then(res => this.isLoggedIn = res);
  }

  async submit(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.supportData.addSupport(this.supportMessage);
      this.supportMessage = '';
      this.submitted = false;
      const toast = await this.toastCtrl.create({
        message: 'Your support request has been sent.',
        duration: 3000
      });
      await toast.present();
    }
  }

  // If the user enters text in the support question and then navigates
  // without submitting first, ask if they meant to leave the page
  // async ionViewCanLeave(): Promise<boolean> {
  //   // If the support message is empty we should just navigate
  //   if (!this.supportMessage || this.supportMessage.trim().length === 0) {
  //     return true;
  //   }

  //   return new Promise((resolve: any, reject: any) => {
  //     const alert = await this.alertCtrl.create({
  //       title: 'Leave this page?',
  //       message: 'Are you sure you want to leave this page? Your support message will not be submitted.',
  //       buttons: [
  //         { text: 'Stay', handler: reject },
  //         { text: 'Leave', role: 'cancel', handler: resolve }
  //       ]
  //     });

  //     await alert.present();
  //   });
  // }
}
