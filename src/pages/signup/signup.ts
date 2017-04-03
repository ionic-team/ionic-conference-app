import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-user',
  templateUrl: 'signup.html'
})
export class SignupPage {
  signup: {username?: string, password?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController, public userData: UserData) {}

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.signup(this.signup.username);
      this.navCtrl.push(TabsPage);
    }
  }
}
