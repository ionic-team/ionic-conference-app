import { AfterViewInit, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { NgOptimizedImage } from '@angular/common';
import {
  AlertController,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { UserService } from '../../providers/user.service';

@Component({
    selector: 'page-account',
    templateUrl: 'account.html',
    styleUrls: ['./account.scss'],
    imports: [
        IonHeader,
        IonToolbar,
        IonButtons,
        IonMenuButton,
        IonTitle,
        IonContent,
        IonItem,
        IonList,
        NgOptimizedImage,
    ],
    providers: [AlertController]
})
export class AccountPage implements AfterViewInit {
  private alertCtrl = inject(AlertController);
  private router = inject(Router);
  private user = inject(UserService);

  username: string;

  ngAfterViewInit() {
    this.getUsername();
  }

  updatePicture() {
    console.log('Clicked to update picture');
  }

  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing
  async changeUsername() {
    const alert = await this.alertCtrl.create({
      header: 'Change Username',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (data: { username: string }) => {
            this.user.setUsername(data.username);
            this.getUsername();
          },
        },
      ],
      inputs: [
        {
          type: 'text',
          name: 'username',
          value: this.username,
          placeholder: 'username',
        },
      ],
    });
    await alert.present();
  }

  getUsername() {
    this.user.getUsername().then(username => {
      this.username = username;
    });
  }

  changePassword() {
    console.log('Clicked to change password');
  }

  logout() {
    this.user.logout();
    this.router.navigateByUrl('/login');
  }

  support() {
    this.router.navigateByUrl('/support');
  }
}
