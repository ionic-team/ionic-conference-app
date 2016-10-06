import { Component } from '@angular/core';
import { ViewController} from 'ionic-angular';

@Component({
  template: `
    <ion-list>      
      <button ion-item (click)="close(0, 'Thursday')">Thursday</button>
      <button ion-item (click)="close(1, 'Friday')">Friday</button>
      <button ion-item (click)="close(2, 'Saturday')">Saturday</button>      
    </ion-list>
  `
})
export class SchedulePopoverPage {
  constructor(public viewCtrl: ViewController) {}

  close(dayIndex: number, day: string) {
    this.viewCtrl.dismiss(dayIndex, day);
  }
}