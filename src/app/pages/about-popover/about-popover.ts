import { Component } from '@angular/core';

import { App, PopoverController } from '@ionic/angular';


@Component({
  template: `
    <ion-list>
      <ion-item (click)="close('http://ionicframework.com/docs/v2/getting-started')">
        <ion-label>Learn Ionic</ion-label>
      </ion-item>
      <ion-item (click)="close('http://ionicframework.com/docs/v2')">
        <ion-label>Documentation</ion-label>
      </ion-item>
      <ion-item (click)="close('http://showcase.ionicframework.com')">
        <ion-label>Showcase</ion-label>
      </ion-item>
      <ion-item (click)="close('https://github.com/ionic-team/ionic')">
        <ion-label>GitHub Repo</ion-label>
      </ion-item>
      <ion-item (click)="support()">
        <ion-label>Support</ion-label>
      </ion-item>
    </ion-list>
  `
})
export class PopoverPage {

  constructor(public app: App, public popoverCtrl: PopoverController) { }

  support() {
    this.app.getRootNavs()[0].push('SupportPage');
    this.popoverCtrl.dismiss();
  }

  close(url: string) {
    window.open(url, '_blank');
    this.popoverCtrl.dismiss();
  }
}
