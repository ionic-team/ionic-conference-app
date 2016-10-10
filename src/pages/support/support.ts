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

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) { }

  ionViewCanLeave() {
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
          }
        }
      ]
    });
    confirm.present().then(() => {
      console.log('hello world');
    })
    return false;
  }

}
