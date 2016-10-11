import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.submitted = false;
  }

  submit() {
    this.submitted = true;
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
