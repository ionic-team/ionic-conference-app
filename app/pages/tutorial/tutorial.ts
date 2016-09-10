import { Component } from '@angular/core';

import { MenuController, NavController, Storage, LocalStorage } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';


interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  templateUrl: 'build/pages/tutorial/tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;
  local: Storage;

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.local = new Storage(LocalStorage);
    this.slides = [
      {
        title: 'Welcome to <b>ICA</b>',
        description: 'The <b>Ionic Conference App</b> is a practical preview of the Ionic Framework in action, and a demonstration of proper code use.',
        image: 'img/ica-slidebox-img-1.png',
      }
    ];
  }

  startApp() {
    this.local.set('intro', true);
    this.navCtrl.push(TabsPage);
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
