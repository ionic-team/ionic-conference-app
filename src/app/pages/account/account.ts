import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

import { UserData } from '../../providers/user-data';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  styleUrls: ['./account.scss'],
})
export class AccountPage implements AfterViewInit {
  username: string;
  bio: string;
  worklevel: string;
  // myphoto: any="assets/imgs/registration_default_image.png"

  constructor(
    public alertCtrl: AlertController,
    public router: Router,
    public userData: UserData
  ) { }

  ngAfterViewInit() {
    this.getUsername();
    this.getWorklevel();
    this.getBio();
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
          text: 'OK',
          handler: (data: any) => {
            this.userData.setUsername(data.username);
            this.getUsername();
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'username',
          value: this.username,
          placeholder: 'username'
        }
      ]
    });
    await alert.present();
  }


  getUsername() {
    this.userData.getUsername().then((username) => {
      this.username = username;
    });
  }

  async changeBio(){
    const alert = await this.alertCtrl.create({
      header: 'Change Bio',
      buttons: [
        'Cancel',
        {
          text: 'OK',
          handler: (data: any) => {
            this.userData.setBio(data.bio);
            this.getBio();
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'bio',
          value: this.bio,
          placeholder: 'bio'
        }
      ]
    });
    await alert.present();
  }

  getBio() {
    this.userData.getBio().then((bio) => {
      this.bio = bio;
    });
  }


  async changeWorklevel(){
    const alert = await this.alertCtrl.create({
      header: 'Change Worklevel',
      buttons: [
        'Cancel',
        {
          text: 'OK',
          handler: (data: any) => {
            this.userData.setWorklevel(data.worklevel);
            this.getWorklevel();
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'worklevel',
          value: this.worklevel,
          placeholder: 'worklevel'
        }
      ]
    });
    await alert.present();
  }


  getWorklevel() {
    this.userData.getWorklevel().then((worklevel) => {
      this.worklevel = worklevel;
    });
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

  // getImage(){
  //   const options: CameraOptions = {
  //     quality: 70,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  //     saveToPhotoAlbum:false
  //   }
  //   this.camera.getPicture(options).then((imageData) => {
  //     // imageData is either a base64 encoded string or a file URI
  //     // If it's base64:
  //     this.myphoto = 'data:image/jpeg;base64,' + imageData;
  //   }, (err) => {
  //     // Handle error
  //   });
  // }

}
