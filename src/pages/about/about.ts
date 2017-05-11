import {Component} from '@angular/core';
import {PopoverController} from 'ionic-angular';

import {PopoverPage} from '../about-popover/about-popover';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public popoverCtrl: PopoverController) {
  }

  presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ev: event});
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
