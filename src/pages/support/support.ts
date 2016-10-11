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
export class Support {

  submitted: boolean;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) {
    this.submitted = false;
  }

  ionViewDidEnter() {
    console.log('called');
    let toast = this.toastCtrl.create({
      message: 'This does not actually send a support request'
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
              return true;
            }
          }
        ]
      });
      confirm.present();
      return false;
    }
  }

}
