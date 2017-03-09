import { Component } from '@angular/core';

import { DeepLink, PopoverController } from 'ionic-angular';

@DeepLink()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  conferenceDate = '2047-05-17';

  constructor(public popoverCtrl: PopoverController) { }

  presentPopover(event: Event) {
    let popover = this.popoverCtrl.create('PopoverPage');
    popover.present({ ev: event });
  }
}
