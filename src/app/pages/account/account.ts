import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { UserData } from '../../providers/user-data';
import { User } from '../../models';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  styleUrls: ['./account.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccountPage implements AfterViewInit {
  users: User[];
  username: string;
  succeed: boolean;
  jobDescription: string;

  constructor(public alertCtrl: AlertController,
              public router: Router,
              public userData: UserData) {}

  ngAfterViewInit() {
    this.getUsers();
    this.getUsername();
  }

  updatePicture() {
    console.log('Clicked to update picture');
  }

  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing
  async changeUsername() {
    this.succeed = false;
    const changeForm = await this.alertCtrl.create({
      header: 'Change Username',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (data: any) => {
            if (this.isNameExist(data.username)) {
              alert(data.username + ' is used already. Try another.');
            } else {
              this.userData.updateUsername(data.username);
              this.username = data.username;
              this.succeed = true;
              this.jobDescription = 'User"s name is changed.';
            }
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'username',
          value: this.username,
          placeholder: 'new username'
        }
      ]
    });
    await changeForm.present();
  }

  getUsername() {
    this.userData.getUsername().then((username) => {
      this.username = username;
    });
  }

  getUsers() {
    this.userData.getUsers().subscribe(
      users => { this.users = users; }
    );
  }

  isNameExist(name: string) {
    return this.users.find(
      user => user.username.toLowerCase() === name.toLowerCase());
  }

  changePassword() {
    console.log('Clicked to change password');
  }

  logout() {
    this.userData.logout();
    this.router.navigateByUrl('/login');
  }

  support() {
    this.router.navigateByUrl('/support');
  }
}
