import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController, MenuController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import { TabsPage } from '../tabs-page/tabs-page';
import { AngularFireDatabase } from 'angularfire2/database';

import { FormsModule} from '@angular/forms';
import * as firebase from 'firebase';



@Component({
  selector: 'page-user',
  templateUrl: 'signup.html'
})
export class SignupPage {
  signup: UserOptions = { username: '', email: '', mobile:'', passcode:'' };
  submitted = false;
  contacted: boolean= false;

  arrData= []
  myInput:any

  newemail: string;

  public list: firebase.database.Reference = firebase.database().ref('/');


  constructor(public navCtrl: NavController, public userData: UserData,  public menu: MenuController, public fdb: AngularFireDatabase) {

    /* this.fdb.list("signup/").subscribe(_data=> {
      this.arrData= _data;

      console.log(this.arrData);
    }) */
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    //this.menu.enable(true);
  }

  onSignup(form: NgForm) {
    this.btnclicked();
    this.submitted = true;

    if (form.valid) {
      this.userData.signup(this.signup.username);   //
      this.navCtrl.push(TabsPage);
    }
  }

  btnclicked()
  {

    this.newemail=this.signup.email.toString().split('.').join('_');

    this.addCustomKey(this.newemail,this.signup)
    /* this.fdb.list("signup/").push(this.signup);
    console.log(this.signup); */

  }

  updateContacted() {
    console.log('Contacted new state:' + this.contacted);
  }

  addCustomKey(key, value) {
    const users = this.fdb.object('signup/');
    users.update({ [key]: value });
  }
}




