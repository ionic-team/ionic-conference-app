import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

import { MenuController, Platform, ToastController } from '@ionic/angular';

import { StatusBar } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';

import { Storage } from '@ionic/storage-angular';

import { UserData } from './providers/user-data';

import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  appPages = [
    {
      title: 'Registration',
      url: '/app/tabs/register',
      icon: 'hammer'
    },
    {
      title: 'Exhibitor Information',
      url: '/app/tabs/exhibitor-list',
      icon: 'information-circle'
    },
    {
      title: 'Floor Plan',
      url: '/app/tabs/map',
      icon: 'map'
    },
    {
      title: 'Event Schedule',
      url: '/app/tabs/schedule',
      icon: 'calendar'
    },
  ];
  appPages_1 = [{

    title: 'Programme',
    url: '/app/tabs/exposchedule',
    icon: 'time'
  },
  {
    title: 'Speakers',
    url: '/app/tabs/speakers',
    icon: 'people'
  },
  {
    title: 'Scan',
    url: '/app/tabs/scanner',
    icon: 'scan'
  },
  {
    title: 'Broadcasting',
    url: '/app/tabs/broadcasting',
    icon: 'caret-forward'
  },
 ]
  appPages_2 = [
    {
      title: "Supplier's Platform",
      url: '/app/tabs/supplier',
      icon: 'briefcase'
    },
    {
      title: "B2B",
      url: '/app/tabs/btb',
      icon: 'cafe'
    },


  ]
  loggedIn = false;
  dark = false;

  constructor(
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private authService: AuthService,
    private storage: Storage,
    private userData: UserData,
    private swUpdate: SwUpdate,
    private toastCtrl: ToastController,
  ) {
    this.initializeApp();
  }

  async ngOnInit() {
    await this.storage.create();
    this.checkLoginStatus();
    this.listenForLoginEvents();

    this.swUpdate.available.subscribe(async res => {
      const toast = await this.toastCtrl.create({
        message: 'Update available!',
        position: 'bottom',
        buttons: [
          {
            role: 'cancel',
            text: 'Reload'
          }
        ]
      });

      await toast.present();

      toast
        .onDidDismiss()
        .then(() => this.swUpdate.activateUpdate())
        .then(() => window.location.reload());
    });
  }

  async logout() {
		await this.authService.logout();
		this.router.navigateByUrl('/', { replaceUrl: true });
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
    return this.userData.isLoggedIn().then(loggedIn => {
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

  // logout() {
    // this.userData.logout().then(() => {
      // return this.router.navigateByUrl('/app/tabs/schedule');
    // });
  // }

  openTutorial() {
    this.menu.enable(false);
    this.storage.set('ion_did_tutorial', false);
    this.router.navigateByUrl('/tutorial');
  }
}
