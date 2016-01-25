import {IonicApp, Page, NavController, Animation} from 'ionic-framework/ionic';
import {TabsPage} from '../tabs/tabs';
import {SignupPage} from '../signup/signup';


interface Slide {
  title: string;
  description: string;
  image: string;
  continueText: string;
}

@Page({
  templateUrl: 'build/pages/tutorial/tutorial.html',
})
export class TutorialPage {
  slides: Slide[];

  constructor(private nav: NavController, private app: IonicApp) {
    this.slides = [
      {
        title: "Welcome",
        description: "All of the information you need to get up and running with Ionic.",
        image: "img/ionic-welcome.png",
        continueText: "Skip Intro"
      },
      {
        title: "Ionic View",
        description: "Learn how you can use Ionic View to share your apps.",
        image: "img/ionic-view.png",
        continueText: "Skip Intro"
      },
      {
        title: "Ionic Creator",
        description: "Drag-&-drop to create a great Ionic app with the click of a mouse.",
        image: "img/ionic-creator.png",
        continueText: "Skip Intro"
      },
      {
        title: "Ionic Platform",
        description: "Our Platform Services are there to make development easier.",
        image: "img/ionic-platform.png",
        continueText: "Continue"
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

  playImageAnimation(slideIndex: number) {
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
