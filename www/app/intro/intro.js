import {ViewQuery, QueryList} from 'angular2/angular2';
import {IonicApp, IonicView, NavController, Slides} from 'ionic/ionic';


@IonicView({
  templateUrl: 'app/intro/intro.html'
})
export class IntroPage {
  constructor(app: IonicApp, nav: NavController, @ViewQuery(Slides) slides: QueryList<Slides>) {

    this.nextButton = 'Next';
    this.prevButton = 'Skip';

    this.nav = nav;

    this.sliderOptions = {
      onSlideChangeEnd: (slider, e) => {
        this.updateButtons()
      }
    }

    // Get the child slider.
    // Note: this will be getting cleaner in a future Angular 2 release
    slides.onChange((c) => {
      this.mySlider = slides.first;
    });
  }

  go() {
    // You might want to navigate here, the tutorial is done.
    // ex: this.nav.push(HomePage)
  }

  next() {
    if(!this.mySlider) { return; }

    if(this.mySlider.isAtEnd()) {
      alert('Done!');
      this.go();
    } else {
      this.mySlider.next();
      this.updateButtons();
    }
  }

  prev() {
    if(!this.mySlider) { return; }

    if(this.mySlider.getIndex() == 0) {
      alert('Skipped tutorial');
      this.go();
    } else {
      this.mySlider.prev();
      this.updateButtons();
    }
  }

  // Update the header buttonses text
  updateButtons() {
    if(!this.mySlider) { return; }

    if(this.mySlider.isAtEnd()) {
      this.nextButton = 'End';
    } else {
      this.nextButton = 'Next';
    }

    if(this.mySlider.getIndex() > 0) {
      this.prevButton = 'Back'
    } else {
      this.prevButton = 'Skip'
    }
  }
}
