import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController ,MenuController} from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import { TabsPage } from '../tabs-page/tabs-page';
import { SignupPage } from '../signup/signup';

import { Storage } from '@ionic/storage';

import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';



@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: UserOptions = { username: '', email:'', mobile:'', passcode:'' };
  users: UserOptions = { username: '', email:'', mobile:'', passcode:'' };

  submitted = false;

  data: any;

  newemail: string;

  public list: firebase.database.Reference = firebase.database().ref('/signup/');

  constructor(public navCtrl: NavController, public menu: MenuController,
  public userData: UserData, public storage: Storage, public fdb: AngularFireDatabase) {
    
   
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    //this.menu.enable(true);
  }


  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username);

      /* console.log

      console.log (this.fdb.list(this.login.mobile));

      console.log(this.list.child(this.login.mobile)); */
      //this.newemail=this.login.email.toString().replace(".","_");
      this.newemail=this.login.email.toString().split('.').join('_');

      if(!(firebase.database().ref('/signup/'+this.newemail)))
      {
        console.log("Wrong input");
      }
      else{
        firebase.database().ref('/signup/'+this.newemail).on('value', resp => {
        if((resp.val().email===this.login.email)&&(resp.val().passcode==this.login.passcode))
        {
          console.log("Successfully matched the credentials");
          this.navCtrl.push(TabsPage);
          this.storage.set('hasLoggedIn', 'true');
        }
        else
        {
          console.log("Wrong Input");
        }
      });
    }


      /*this.list.on('value', itemSnapshot=> {
        this.data = [];
        console.log('************',itemSnapshot);
        itemSnapshot.forEach( itemSnap => {
              console.log(itemSnap.val());
              this.data[itemSnap.key] = itemSnap.val();

              console.log(" IF, "+this.login.email+"got:"+itemSnap.val().email);
              console.log(" IF, "+this.login.passcode+"got:"+itemSnap.val().passcode);

              if((itemSnap.val().email==this.login.email)&&(itemSnap.val().passcode==this.login.passcode))
              {
                console.log("Succssfully matched the credentials");
                this.storage.set('username', this.login.username );
                this.storage.set('userpass', this.login.passcode );
                this.storage.set('usermob', this.login.mobile );


                this.navCtrl.push(TabsPage);
                this.storage.set('hasLoggedIn', 'true');
              }
              else
              {
                console.log("Wrong Input");
              }
              
              //return false;
          });
      }) */





      
    }
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }
}
