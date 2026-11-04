import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonToolbar,
  MenuController,
} from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';
import { addIcons } from 'ionicons';
import { arrowForward, close } from 'ionicons/icons';

@Component({
    selector: 'page-tutorial',
    templateUrl: 'tutorial.html',
    styleUrls: ['./tutorial.scss'],
    imports: [IonHeader, IonToolbar, IonButtons, IonButton, IonContent, IonIcon]
})
export class TutorialPage {
  menu = inject(MenuController);
  router = inject(Router);

  showSkip = true;

  constructor() {
    addIcons({
      arrowForward,
      close,
    });
  }

  startApp() {
    this.router
      .navigateByUrl('/app/tabs/schedule', { replaceUrl: true })
      .then(() => Preferences.set({ key: 'ion_did_tutorial', value: 'true' }));
  }

  ionViewWillEnter() {
    Preferences.get({ key: 'ion_did_tutorial' }).then(({ value }) => {
      if (value === 'true') {
        this.router.navigateByUrl('/app/tabs/schedule', { replaceUrl: true });
      }
    });

    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
}
