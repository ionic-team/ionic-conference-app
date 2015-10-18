import {App, Platform, StatusBar} from 'ionic/ionic';
import {DataService} from './service/data';
import {forwardRef, FORM_DIRECTIVES, FormBuilder, Validators, Control, ControlGroup} from 'angular2/angular2';
import {Http, HTTP_BINDINGS} from 'angular2/http';
import {HomePage} from './home/home';
import {ScheduleList} from './components/schedule-list';

@App({
  templateUrl: 'app/app.html',
  providers: [DataService, Http, FormBuilder, HTTP_BINDINGS],
  directives: [forwardRef(() => ScheduleList)]
})
class MyApp {
  constructor(platform: Platform, data: DataService) {
    this.platform = platform;
    data.retrieveData();
    this.initializeApp();
    this.rootPage = HomePage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.setStyle(StatusBar.DEFAULT);
    });
  }
}
