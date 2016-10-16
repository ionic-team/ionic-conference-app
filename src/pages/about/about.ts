import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { ViewController } from 'ionic-angular';


@Component({
  template: `
    <ion-list>
      <button ion-item (click)="close()">Learn Ionic</button>
      <button ion-item (click)="close()">Documentation</button>
      <button ion-item (click)="close()">Showcase</button>
      <button ion-item (click)="close()">GitHub Repo</button>
    </ion-list>
  `
})
export class PopoverPage {

  constructor(public viewCtrl: ViewController) { }

  close() {
    this.viewCtrl.dismiss();
  }
}


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  private _platform: Platform;
  private _isAndroid: boolean;
  private _isiOS: boolean;
  constructor(platform: Platform) {
    this._platform = platform;
    this._isAndroid = platform.is('android');
    this._isiOS = platform.is('ios');
  }
  conferenceDate = '2016-10-20';
  conferenceDateEnd = '2016-10-22';

openMapsApp() {

  var coords = "33.883812,-84.46812";
  if(this._isiOS) {
    window.open("http://maps.apple.com/?q=" + coords, '_system');
    return;
  }

  if(this._isAndroid) {
    window.open("geo:" + coords);
    return;
  }

  window.open("http://maps.google.com/?q=" + coords, '_system');
  return;
}
}
