import { Component } from '@angular/core';

import { PopoverController, ViewController, NavController } from 'ionic-angular';

import { Support } from '../support/support';


@Component({
  template: `
    <ion-list>
      <button ion-item (click)="close('http://ionicframework.com/docs/v2/getting-started/')">Learn Ionic</button>
      <button ion-item (click)="close('http://ionicframework.com/docs/v2/')">Documentation</button>
      <button ion-item (click)="close('http://showcase.ionicframework.com/')">Showcase</button>
      <button ion-item (click)="close('https://github.com/driftyco/ionic')">GitHub Repo</button>
      <button ion-item (click)="support()">Support</button>
    </ion-list>
  `
})
export class PopoverPage {

  constructor(public viewCtrl: ViewController, public navCtrl: NavController) { }

  support() {
    this.navCtrl.push(Support);
    this.viewCtrl.dismiss();
  }

  close(url: string) {
    window.open(url);
    this.viewCtrl.dismiss();
  }
}


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  conferenceDate = '2047-05-17';

  constructor(public popoverCtrl: PopoverController) { }

  presentPopover(event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ ev: event });
  }
}
