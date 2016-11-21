import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';

/*
  Generated class for the Support page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-support',
  templateUrl: 'support.html'
})
export class SupportPage {

  submitted: boolean;
  supportMessage: string;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) {
    this.submitted = false;
  }

  ionViewDidEnter() {
    let toast = this.toastCtrl.create({
      message: 'This does not actually send a support request',
      duration: 3000
    });
    toast.present();
  }

  submit(form) {
    this.submitted = true;

    if (form.valid) {
      console.log('valid');
      let toast = this.toastCtrl.create({
        message: 'Support request sent!',
        duration: 3000
      });
      toast.present();
    }
  }

  ionViewCanLeave() {
    if (this.submitted === true) {
      return true;
    } else {
      let confirm = this.alertCtrl.create({
        title: 'Leave this page?',
        message: 'Are you sure you want to leave this page?',
        buttons: [
          {
            text: 'Stay',
            handler: () => {
              console.log('Disagree clicked');
            }
          },
          {
            text: 'Leave',
            handler: () => {
              console.log('Agree clicked');
              this.submitted = true;
              this.navCtrl.pop();
            }
          }
        ]
      });
      confirm.present();
      return false
    }
  }

}
