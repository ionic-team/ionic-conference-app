import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonToolbar,
  MenuController,
} from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { addIcons } from 'ionicons';
import { arrowForward, close } from 'ionicons/icons';

@Component({
    selector: 'page-tutorial',
    templateUrl: 'tutorial.html',
    styleUrls: ['./tutorial.scss'],
    imports: [IonHeader, IonToolbar, IonButtons, IonButton, IonContent, IonIcon]
})
export class TutorialPage {
  showSkip = true;

  constructor(
    public menu: MenuController,
    public router: Router,
    public storage: Storage
  ) {
    addIcons({
      arrowForward,
      close,
    });
  }

  startApp() {
    this.router
      .navigateByUrl('/app/tabs/schedule', { replaceUrl: true })
      .then(() => this.storage.set('ion_did_tutorial', true));
  }

  ionViewWillEnter() {
    this.storage.get('ion_did_tutorial').then(res => {
      if (res === true) {
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
