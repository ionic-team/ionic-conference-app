import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { calendar, informationCircle, location, people } from 'ionicons/icons';

@Component({
  standalone: true,
  templateUrl: 'tabs-page.html',
  imports: [
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    RouterModule,
  ],
})
export class TabsPage {
  constructor() {
    addIcons({ calendar, people, location, informationCircle });
  }
}
