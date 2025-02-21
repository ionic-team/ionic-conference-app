import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { addIcons } from 'ionicons';

import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';

import { Storage } from '@ionic/storage-angular';

import { FormsModule } from '@angular/forms';
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
} from '@ionic/angular/standalone';
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
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  private storage = inject(Storage);
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
  loggedIn = false;
  dark = false;

  constructor() {
    this.initializeApp();
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

  async ngOnInit() {
    await this.storage.create();
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

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is('hybrid')) {
        StatusBar.hide();
        SplashScreen.hide();
      }
    });
  }

  checkLoginStatus() {
    return this.userService.isLoggedIn().then(loggedIn => {
      return this.updateLoggedInStatus(loggedIn);
    });
  }

  updateLoggedInStatus(loggedIn: boolean) {
    setTimeout(() => {
      this.loggedIn = loggedIn;
    }, 300);
  }

  listenForLoginEvents() {
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

  logout() {
    this.userService.logout().then(() => {
      return this.router.navigateByUrl('/app/tabs/schedule');
    });
  }

  openTutorial() {
    this.menu.enable(false);
    this.storage.set('ion_did_tutorial', false);
    this.router.navigateByUrl('/tutorial');
  }

  toggleDarkMode() {
    document.documentElement.classList.toggle('ion-palette-dark', this.dark);
  }
}
