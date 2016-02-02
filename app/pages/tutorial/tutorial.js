import {IonicApp, Page, NavController, Animation} from 'ionic/ionic';
import {TabsPage} from '../tabs/tabs';
import {SignupPage} from '../signup/signup';


@Page({
  templateUrl: 'build/pages/tutorial/tutorial.html'
})
export class TutorialPage {
  constructor(nav: NavController, app: IonicApp) {
    this.nav = nav;
    this.app = app;
    this.continueText = "Skip Intro";

    this.slides = [
      {
        title: "Welcome",
        description: "All of the information you need to get up and running with Ionic.",
        image: "img/ionic-welcome.png",
      },
      {
        title: "Ionic View",
        description: "Learn how you can use Ionic View to share your apps.",
        image: "img/ionic-view.png",
      },
      {
        title: "Ionic Creator",
        description: "Drag-&-drop to create a great Ionic app with the click of a mouse.",
        image: "img/ionic-creator.png",
      },
      {
        title: "Ionic Platform",
        description: "Our Platform Services are there to make development easier.",
        image: "img/ionic-platform.png",
      },
    ];
  }

  ngAfterViewInit() {
    this.playImageAnimation(0);
  }

  startApp() {
    this.nav.push(TabsPage);
  }

  onSlideChange(event) {
    this.continueText = event.isEnd ? "Continue" : "Skip Intro";
    this.playImageAnimation(event.activeIndex);
  }

  onPageDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.app.getComponent('leftMenu').enable(false);
  }

  onPageWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.app.getComponent('leftMenu').enable(true);
  }

  playImageAnimation(slideIndex) {
    if (slideIndex === 0) {
      this.runRotateAnimation();
    }
  }

  runRotateAnimation() {
    const logoSpin = new Animation(document.querySelector('.slide-image'));
    logoSpin
      .from('transform', 'rotate(0deg)')
      .to('transform', 'rotate(360deg)');

    const animation = new Animation();
    animation.duration(3000);
    animation.add(logoSpin);
    animation.play();
  }
}
