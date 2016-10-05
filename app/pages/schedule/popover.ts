import { Component } from '@angular/core';
import { ViewController} from 'ionic-angular';

@Component({
  template: `
    <ion-list>      
      <button ion-item (click)="close(0)">Thursday</button>
      <button ion-item (click)="close(1)">Friday</button>
      <button ion-item (click)="close(2)">Saturday</button>      
    </ion-list>
  `
})
export class PopoverPage {
  constructor(public viewCtrl: ViewController) {}

  close(day) {
    this.viewCtrl.dismiss(day);
  }
}