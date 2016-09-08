import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Auth, User, AuthModuleId } from '@ionic/cloud-angular';

import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { UserData } from '../../providers/user-data';


@Component({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {
  login: {username?: string, password?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController, public userData: UserData, public auth: Auth, public user: User) { }

  onLogin(form) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username);
      this.navCtrl.push(TabsPage);
    }
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }

  social(provider: AuthModuleId) {
    this.auth.login(provider).then((success) => {
      this.navCtrl.push(TabsPage);
    }, (err) => {
      console.log(err);
    });
  }
}
