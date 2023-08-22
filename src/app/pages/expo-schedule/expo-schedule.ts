import { Component, ViewChild, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser';

@Component({
  selector: 'page-expo-schedule',
  templateUrl: 'expo-schedule.html',
  styleUrls: ['./expo-schedule.scss'],
})
export class ExpoSchedulePage {

  constructor(private iab: InAppBrowser) {
    this.openInAppBrowser();
  }

  openInAppBrowser() {
    const browser = this.iab.create('https://miningexponamibia.com/program/',
    '_blank',
    {
      location: 'no',
      hidden: 'no',
      hardwareback: 'yes',
      toolbar: 'no',
      fullscreen: 'no'
    });

      // browser.on('loadstop').subscribe(event => {
        // browser.insertCSS({ code: "body{color: red;" });
      // });

      // browser.close();

  }
}
