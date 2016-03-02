import {NavController, NavParams, Page} from 'ionic-framework/ionic';
import {Inject} from 'angular2/core';

/*
  Generated class for the ProfileDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/profile-detail/profile-detail.html',
})
export class ProfileDetailPage {
  static get parameters(){
    return [[NavController], [NavParams]];
  }

  constructor(nav, navParams) {
    this.nav = nav;
    this.navParams = navParams;
    this.profile = this.navParams.data;
  }
}
