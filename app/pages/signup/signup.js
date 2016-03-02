import {Page, NavController} from 'ionic-framework/ionic';
import {Inject} from 'angular2/core';
import {TabsPage} from '../tabs/tabs';
import {UserData} from '../../providers/user-data';
import {DbPage} from '../db/db';


@Page({
  templateUrl: 'build/pages/signup/signup.html'
})
export class SignupPage {
  static get parameters(){
    return [[NavController], [UserData]];
  }

  constructor(nav, userData) {
    this.nav = nav;
    this.userData = userData;

    this.signup = {};
    this.submitted = false;
	
	//
	this.signup.exists = false;
  }
  
  onSignup(form) {

	this.submitted = true;
	console.log(form);
	//
	var id = this.signup.username;
	var wp = this.signup.password;
	var name = this.signup.name;
	var picture = this.signup.picture;
	var twitter = this.signup.twitter;
	var about = this.signup.about;
	var location = this.signup.location;
	var tracks = "";
	if(this.signup.tracks){
		tracks = this.signup.tracks.split(", ");
	}
	
	// should be replaced by a directive
	if(DbPage.exists("users", id)){
		this.signup.exists = true;
		throw "username already exists";
	}


    if (form.valid) {
	  var row = {id:id,
				 name:name,
				 profilePic:picture,
				 twitter:twitter,
				 about:about,
				 tracks:tracks,
				 location:location};
	  DbPage.add("users", row);
      this.userData.signup(id, wp);
	  DbPage.save();
      this.nav.push(TabsPage);
    }
  }
}
