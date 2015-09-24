import {IonicView, NavController, IonicApp} from 'ionic/ionic';
import {DataService} from '../service/data';
import {Http, HTTP_BINDINGS} from "angular2/http";
import {DateFormat} from '../components/date-format';

@IonicView({
  templateUrl: 'app/schedule/schedule.html',
  bindings: [DataService, Http],
  viewBindings: [HTTP_BINDINGS],
  directives: [DateFormat]
})

export class SchedulePage {
  constructor(nav: NavController, app: IonicApp, data: DataService) {
    this.schedule = data.getSchedule();
    console.log('schedule data', this.schedule);
    this.scheduleData = Object.keys(this.schedule);
  }
}
