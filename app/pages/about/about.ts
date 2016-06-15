import {Component} from '@angular/core';
import {NavController, ViewController, Popover} from 'ionic-angular';

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
class PopoverPage {

  constructor(private viewCtrl: ViewController) {

  }

  close() {
    this.viewCtrl.dismiss();
  }
}


@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
  conferenceDate = '2047-05-17';

  constructor(private nav: NavController) {}

  presentPopover(event) {
    let popover = Popover.create(PopoverPage);
    this.nav.present(popover, { ev: event });
  }
}
