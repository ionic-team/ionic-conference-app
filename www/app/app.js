import {App, IonicApp, IonicPlatform} from 'ionic/ionic';
import {DataService} from './service/data';
import {forwardRef, FORM_DIRECTIVES, FormBuilder, Validators, Control, ControlGroup} from 'angular2/angular2';
import {Http, HTTP_BINDINGS} from 'angular2/http';
import {HomePage} from './home/home';
// import {FORM_DIRECTIVES, FormBuilder, Validators, Control, ControlGroup} from 'angular2/forms';
import {ScheduleList} from './components/schedule-list';

@App({
  templateUrl: 'app/app.html',
  bindings: [DataService, Http, FormBuilder, HTTP_BINDINGS],
  directives: [forwardRef(() => ScheduleList)],
  viewBindings: [HTTP_BINDINGS]
})

class MyApp {
  constructor(app: IonicApp, platform: IonicPlatform, data: DataService) {
    this.app = app;
    this.platform = platform;
    data.retrieveData();
    this.initializeApp();
    this.rootPage = HomePage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Platform ready');

      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      // Keyboard.setAccessoryBarVisible(false);
      //
      // For example, we might change the StatusBar color. This one below is
      // good for dark backgrounds and light text:
      // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)

    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.app.getComponent('menu').close();

    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    let nav = this.app.getComponent('nav');
    console.log('got nav', nav, 'page', page);
    nav.setRoot(page.component);
  }
}
