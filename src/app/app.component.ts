import type { OnInit } from '@angular/core';
import { Component, inject, signal, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { Preferences } from '@capacitor/preferences';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';
import {
  IonApp,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonSplitPane,
  IonToggle,
  MenuController,
  Platform,
  ToastController,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  calendarOutline,
  hammer,
  help,
  informationCircleOutline,
  logIn,
  logOut,
  mapOutline,
  moonOutline,
  peopleOutline,
  person,
  personAdd,
} from 'ionicons/icons';

import { UserService } from './providers/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterLink,
    RouterLinkActive,
    IonRouterOutlet,
    IonLabel,
    IonIcon,
    IonMenuToggle,
    IonToggle,
    IonList,
    IonListHeader,
    IonItem,
    IonContent,
    IonMenu,
    IonSplitPane,
    IonApp,
    FormsModule,
  ],
  providers: [MenuController, ToastController],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  private userService = inject(UserService);
  private swUpdate = inject(SwUpdate);
  private toastCtrl = inject(ToastController);
  private menu = inject(MenuController);
  private platform = inject(Platform);

  appPages = [
    {
      title: 'Schedule',
      url: '/app/tabs/schedule',
      icon: 'calendar',
    },
    {
      title: 'Speakers',
      url: '/app/tabs/speakers',
      icon: 'people',
    },
    {
      title: 'Map',
      url: '/app/tabs/map',
      icon: 'map',
    },
    {
      title: 'About',
      url: '/app/tabs/about',
      icon: 'information-circle',
    },
  ];
  loggedIn = signal(false);
  dark = false;

  constructor() {
    addIcons({
      calendarOutline,
      peopleOutline,
      mapOutline,
      informationCircleOutline,
      person,
      help,
      logOut,
      logIn,
      personAdd,
      moonOutline,
      hammer,
    });
  }

  ngOnInit(): void {
    this.initializeApp();
    this.checkLoginStatus();
    this.listenForLoginEvents();

    this.swUpdate.versionUpdates.subscribe(async () => {
      const toast = await this.toastCtrl.create({
        message: 'Update available!',
        position: 'bottom',
        buttons: [
          {
            role: 'cancel',
            text: 'Reload',
          },
        ],
      });

      await toast.present();

      toast
        .onDidDismiss()
        .then(() => this.swUpdate.activateUpdate())
        .then(() => window.location.reload());
    });
  }

  initializeApp(): void {
    this.platform.ready().then(() => {
      if (this.platform.is('hybrid')) {
        StatusBar.hide();
        SplashScreen.hide();
      }
    });
  }

  checkLoginStatus(): Promise<void> {
    return this.userService.isLoggedIn().then((loggedIn) => {
      return this.updateLoggedInStatus(loggedIn);
    });
  }

  updateLoggedInStatus(loggedIn: boolean): void {
    setTimeout(() => {
      this.loggedIn.set(loggedIn);
    }, 300);
  }

  listenForLoginEvents(): void {
    window.addEventListener('user:login', () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener('user:signup', () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener('user:logout', () => {
      this.updateLoggedInStatus(false);
    });
  }

  logout(): void {
    this.userService.logout().then(() => {
      return this.router.navigateByUrl('/app/tabs/schedule');
    });
  }

  async openTutorial(): Promise<void> {
    const { value } = await Preferences.get({ key: 'ion_did_tutorial' });
    await Preferences.set({ key: 'ion_did_tutorial', value: 'false' });

    // The Support page can ask to stay, so keep the menu and put the tutorial state back if the tutorial does not open.
    if (await this.router.navigateByUrl('/tutorial')) {
      this.menu.enable(false);
    } else if (value === null) {
      await Preferences.remove({ key: 'ion_did_tutorial' });
    } else {
      await Preferences.set({ key: 'ion_did_tutorial', value });
    }
  }

  toggleDarkMode(): void {
    document.documentElement.classList.toggle('ion-palette-dark', this.dark);
  }
}
