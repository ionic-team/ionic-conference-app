import { DatePipe, NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPopover,
  IonSelect,
  IonSelectOption,
  IonText,
  IonToolbar,
  PopoverController,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';
import { PopoverPage } from '../about-popover/about-popover';

@Component({
    selector: 'page-about',
    templateUrl: 'about.html',
    styleUrls: ['./about.scss'],
    imports: [
        NgStyle,
        FormsModule,
        DatePipe,
        IonContent,
        IonHeader,
        IonToolbar,
        IonButtons,
        IonMenuButton,
        IonButton,
        IonIcon,
        IonList,
        IonItem,
        IonLabel,
        IonSelect,
        IonSelectOption,
        IonPopover,
        IonDatetime,
        IonText,
    ],
    providers: [PopoverController]
})
export class AboutPage {
  location = 'madison';
  conferenceDate = '2047-05-17';

  selectOptions = {
    header: 'Select a Location',
  };

  private popoverCtrl = inject(PopoverController);

  constructor() {
    addIcons({ ellipsisHorizontal, ellipsisVertical });
  }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event,
    });
    await popover.present();
  }
}
