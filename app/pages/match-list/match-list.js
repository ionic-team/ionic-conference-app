import {NavController, Page, ActionSheet} from 'ionic-framework/ionic';
import {Inject} from 'angular2/core';
import {ProfileData} from '../../providers/profile-data';
import {ProfileDetailPage} from '../profile-detail/profile-detail';
import {UserData} from '../../providers/user-data';
import {DbPage} from '../db/db';
import {LoginPage} from '../login/login';

/*
  Generated class for the MatchListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/match-list/match-list.html',
})
export class MatchListPage {
  static get parameters(){
    return [[NavController], [ProfileData], [UserData]];
  }
  constructor(nav, profData, userData) {
    this.nav = nav;
    this.profData = profData;
	this.userData = userData;
	this.profiles = [];
	this.current_profile = DbPage.get("users",
									  this.userData.profile_info.id);
	
	this.data = {};
	this.data.profiles = [];
	this.data.table = DbPage.load("users");
	this.data.keys = Object.keys(this.data.table);
	this.data.keys.forEach(key => {
		this.data.profiles.push(this.data.table[key]);
	});
	this.profiles = this.profData.getMatches(this.data, this.current_profile);
  }
  
  goToProfileDetail(profileName){
	this.nav.push(ProfileDetailPage, profileName);
  }
  
  goToLoginPage(){
	this.nav.push(LoginPage);
  }
  
}
