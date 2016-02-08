import {Page, NavController, MenuController} from 'ionic-framework/ionic';
import {TabsPage} from '../tabs/tabs';
import {SignupPage} from '../signup/signup';


interface Slide {
  title: string;
  description: string;
  image: string;
}

@Page({
  templateUrl: 'build/pages/tutorial/tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  continueText = "Skip Intro";

  constructor(private nav: NavController, private menu: MenuController) {
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

  startApp() {
    this.nav.push(TabsPage);
  }

  onSlideChange(event) {
    this.continueText = event.isEnd ? "Continue" : "Skip Intro";
  }

  onPageDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  onPageWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
