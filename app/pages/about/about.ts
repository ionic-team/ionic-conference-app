import {Page, NavController, ViewController, Popover, Platform} from 'ionic-angular';

@Page({
  template: `
    <ion-list [attr.no-lines]="!isIos">
      <button ion-item (click)="close()">Learn Ionic</button>
      <button ion-item (click)="close()">Documentation</button>
      <button ion-item (click)="close()">Showcase</button>
      <button ion-item (click)="close()">GitHub Repo</button>
    </ion-list>
  `
})
class PopoverPage {
  isIos: boolean = false;

  constructor(private viewCtrl: ViewController, private platform: Platform) {
    this.isIos = platform.is('ios');
  }

  close() {
    this.viewCtrl.dismiss();
  }
}


@Page({
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
