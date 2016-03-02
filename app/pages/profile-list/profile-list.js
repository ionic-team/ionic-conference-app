import {NavController, Page, ActionSheet} from 'ionic-framework/ionic';
import {Inject} from 'angular2/core';
import {ProfileData} from '../../providers/profile-data';
import {UserData} from '../../providers/user-data';
import {Storage, LocalStorage} from 'ionic-framework/ionic';
import {DbPage} from '../db/db';

/*
  Generated class for the ProfileListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/profile-list/profile-list.html',
})
export class ProfileListPage {
  static get parameters(){
    return [[NavController], [ProfileData], [UserData]];
  }

  constructor(nav, profData, userData) {
    this.nav = nav;
    this.profData = profData;
	this.userData = userData;
    this.profiles = [];
	this.storage = new Storage(LocalStorage);
	this.showMatch = false;

    this.storage.get(this.userData.HAS_LOGGED_IN).then((value) => {
	  // show match button only in connected mode
      this.showMatch = value;
    });
	// all this stuff only initialize the profile list
	// only add unmatched profiles
	profData.getProfiles().then(profiles => {
	  profiles.forEach(profile => {
		var current_id = this.userData.profile_info.id;
		var row = DbPage.get("users", current_id);
		if ((profile.id != current_id) && (row != undefined)){
			if ((!row.matches)){
			    this.profiles.push(profile);
			}
			else {
				var isNotMatched = (row.matches.ids.indexOf(profile.id) == -1);
				if (isNotMatched){
					this.profiles.push(profile);
				}
			}
		}
		else if (row == undefined){
			this.profiles.push(profile);
		}
	  });
    });
  }
  
  onSlideChangeStart(slider) {
	// do nothing
  }
  
  onMatch(profileName){
	// delete profile from the profile list
	var unMatched = [];
	this.profiles.forEach(profile => {
		if (profile.id != profileName.id){
			unMatched.push(profile);
		}
	});
	this.profiles = unMatched;
	
	// add selected profile to match queue
	var id = this.userData.profile_info.id;
	var row = DbPage.get("users", id);
	var data = {};
	data.profiles = [];
	data.table = DbPage.load("users");
	data.keys = Object.keys(data.table);
	data.keys.forEach(key => {
		data.profiles.push(data.table[key]);
	});
	if(row.matches){
		// add match
		row.matches.ids = row.matches.ids || [];
		row.matches.ids.push(profileName.id);
	}
	else {
		row.matches = {};
		// add match
		row.matches.ids = row.matches.ids || [];
		row.matches.ids.push(profileName.id);
	}
	// update real table
	DbPage.add("users", row);
	DbPage.save();
  }

}
