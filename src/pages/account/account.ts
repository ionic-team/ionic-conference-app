import { Component } from '@angular/core';

import { AlertController, NavController, ToastController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { SupportPage } from '../support/support';
import { UserData } from '../../providers/user-data';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  username: string;

  constructor(
      public alertCtrl: AlertController,
      public nav: NavController,
      public userData: UserData,
      public toastCtrl: ToastController
  ) {

  }

  ngAfterViewInit() {
    this.getUsername();
  }

  updatePicture() {
    console.log('Clicked to update picture');
  }

  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing
  changeUsername() {
    let alert = this.alertCtrl.create({
      title: 'Change Username',
      buttons: [
        'Cancel'
      ]
    });
    alert.addInput({
      name: 'username',
      value: this.username,
      placeholder: 'username'
    });
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        this.userData.setUsername(data.username);
        this.getUsername();
      }
    });

    alert.present();
  }

  getUsername() {
    this.userData.getUsername().then((username) => {
      this.username = username;
    });
  }

  changePassword() {
    let alert = this.alertCtrl.create({
      title: 'Change Password',
      buttons: [
        'Cancel'
      ]
    });
    alert.addInput({
      name: 'password',
      value: '',
      type: 'password',
      placeholder: 'New Password'
    });
    alert.addInput({
      name: 'confirmPassword',
      value: '',
      type: 'password',
      placeholder: 'Confirm Password'
    });

    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        if (data.password === data.confirmPassword) {
          this.userData.setPassword(data.newPassword);
          let toast = this.toastCtrl.create({
            message: 'Password updated.',
            duration: 3000
          });
          toast.present();
        } else {
          alert.setMessage('Password does not match the confirm password')
          return false;
        }

      }
    });

    alert.present();
  }

  logout() {
    this.userData.logout();
    this.nav.setRoot(LoginPage);
  }

  support() {
    this.nav.push(SupportPage);
  }
}
