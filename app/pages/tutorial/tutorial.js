import {IonicApp, Page, NavController, Animation} from 'ionic/ionic';
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
    this._playImageAnimation(0);
  }

  startApp() {
    this.nav.push(TabsPage);
  }

  onSlideChange(event) {
    this.continueText = (event.isEnd == false) ? "Skip Intro" : "Continue";
    this._playImageAnimation(event.activeIndex);
  }

  onPageDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.app.getComponent('leftMenu').enable(false);
  }

  onPageWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.app.getComponent('leftMenu').enable(true);
  }

  _playImageAnimation(slideIndex) {
    if (slideIndex === 0) {
      this._runRotateAnimation();
    }
  }

  _runRotateAnimation() {
    const logoSpin = new Animation(document.querySelector('.logo__ionic-welcome'));
    logoSpin
      .from('transform', 'rotate(0deg)')
      .to('transform', 'rotate(360deg)');

    const animation = new Animation();
    animation.duration(3000);
    animation.add(logoSpin);
    animation.play();
  }
}
