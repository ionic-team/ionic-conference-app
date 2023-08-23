import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AlertController, ToastController } from '@ionic/angular';
// import { Preferences } from '@capacitor/preferences';



@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
  styleUrls: ['./support.scss'],
})
export class SupportPage {
  submitted = false;
  supportMessage: string;

  constructor(
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) { }

// JSON "set" example
// async setObject() {
  // await Preferences.set({
    // key: 'user',
    // value: JSON.stringify({
      // id: 1,
      // name: 'Max'+this.supportMessage
    // })
  // });
// }
//
// JSON "get" example
// async getObject() {
  // const ret = await Preferences.get({ key: 'user' });
  // const user = JSON.parse(ret.value);
// }

  async ionViewDidEnter() {
    const toast = await this.toastCtrl.create({
      message: 'Send a support request.',
      duration: 3000
    });
    await toast.present();
  }

  // async submit(form: NgForm) {
    // this.submitted = true;
//
    // if (form.valid) {
    //  this.supportMessage = '';
      // this.submitted = false;
//
      // const toast = await this.toastCtrl.create({
        // message: 'Your support request has been sent.' + this.supportMessage ,
        // duration: 3000
      // });
      // await toast.present();
      // this.setObject();
      // this.getObject();
    // }
  // }

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
