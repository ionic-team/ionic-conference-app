import {Page} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
  constructor() {
    this.conferenceDate = '2047-05-17';
  }
}
