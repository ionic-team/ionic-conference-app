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
  user: User;
  succeed: boolean;
  jobDescription: string;

  constructor(public alertCtrl: AlertController,
              public router: Router,
              public userProvider: UserData) {}

  ngAfterViewInit() {
    this.userProvider.getUsers().subscribe(
      users => this.users = users
    );
    this.userProvider.getUser().then(
      user => this.user = user
    );
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
            if (this.isTheValueUsed(data.username)) {
              alert(data.username + ' was used already. Try another.');
            } else {
              this.user.username = data.username;
              this.userProvider.updateUser(this.user);
              this.succeed = true;
              this.jobDescription = 'Username has been changed.';
            }
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'username',
          value: this.user.username,
          placeholder: 'new username'
        }
      ]
    });
    await changeForm.present();
  }

  async changeEmail() {
    this.succeed = false;
    const changeForm = await this.alertCtrl.create({
      header: 'Change Email',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (data: any) => {
            if (this.isTheValueUsed(data.email)) {
              alert(data.email + ' was used already. Try another.');
            } else {
              this.user.email = data.email;
              this.userProvider.updateUser(this.user);
              this.succeed = true;
              this.jobDescription = 'Email has been changed.';
            }
          }
        }
      ],
      inputs: [
        {
          type: 'email',
          name: 'email',
          value: this.user.email,
          placeholder: 'new email'
        }
      ]
    });
    await changeForm.present();
  }

  async changePassword() {
    this.succeed = false;
    const changeForm = await this.alertCtrl.create({
      header: 'Change Password',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (data: any) => {
            if (this.user.password !== data.currentPW) {
              alert('Current password does not match your password.');
            } else if (data.newPW.length < 4) {
              alert('Password should be more than 3 characters.');
            } else if (data.newPW !== data.confirmPW) {
              alert('New password does not match Confirm password.');
            } else {
              this.user.password = data.newPW;
              this.userProvider.updateUser(this.user);
              this.succeed = true;
              this.jobDescription = 'Password has been changed.';
            }
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

  isTheValueUsed(value: string) {
    if (value.indexOf('@') < 0) {
      return this.users.find(
        user => user.username.toLowerCase() === value.toLowerCase());
    }
    return this.users.find(
      user => user.email.toLowerCase() === value.toLowerCase());
  }

  logout() {
    this.userProvider.logout();
    this.router.navigateByUrl('/login');
  }

  support() {
    this.router.navigateByUrl('/support');
  }
}
