import {Component} from '@angular/core';
import {NavController, PopoverController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {PopoverPage} from '../about-popover/about-popover';
import {User} from "./User";
import {LoginPage} from '../login/login';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers:[LoginPage]
})
export class AboutPage {
  public user: User;
  private flag: boolean = false;

  constructor(private popoverCtrl: PopoverController,
              private storage: Storage,
              private navCtrl: NavController,) {
  }

  presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ev: event});
  }

  ionViewDidLoad() {
    console.log("init about page");
    this.storage.get("username").then(value => {
      this.user = value;
      this.flag = this.user === null;
      console.log("用户是否登录" + this.flag)
    });
  }

  userInfo() {
    // this.navCtrl.push(LoginPage, {});
  }
  toLogin(){
    console.log("用户未登录，跳转到登录页面!");
    this.navCtrl.push(LoginPage, {});
  }

  itemClick(type: string) {
    switch (type) {
      case 'collect':
        console.log('我的收藏');
        break;
      case 'article':
        console.log('我发表的文章');
        break;
      case 'draft':
        console.log('我的草稿箱');
        break;
      case 'history':
        console.log('我的历史记录');
        break;
      case 'setting':
        console.log('设置');
        break;
      case 'attention':
        console.log('我的关注');
        break;
      default:
        console.warn('未知状态');
    }
  }
}
