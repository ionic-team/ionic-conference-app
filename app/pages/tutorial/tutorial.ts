import {IonicApp, Page, NavController} from 'ionic-framework/ionic';
import {TabsPage} from '../tabs/tabs';
import {SignupPage} from '../signup/signup';


@Page({
  templateUrl: 'build/pages/tutorial/tutorial.html',
})
export class TutorialPage {
  constructor(nav: NavController, app: IonicApp) {
    this.nav = nav;
    this.app = app;

    this.continueText = "Skip Intro";
  }

  startApp() {
    this.nav.push(TabsPage);
  }

  onSlideChange(event) {
    this.continueText = (event.isEnd == false) ? "Skip Intro" : "Continue";
  }

  onPageDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.app.getComponent('leftMenu').enable(false);
  }

  onPageWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.app.getComponent('leftMenu').enable(true);
  }
}
