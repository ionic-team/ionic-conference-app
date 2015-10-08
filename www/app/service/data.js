import {App, IonicApp, IonicPlatform} from 'ionic/ionic';
import {Injectable, bind} from "angular2/angular2";
import {Http, HTTP_BINDINGS} from "angular2/http";

@Injectable()
export class DataService {
  constructor(app: IonicApp, http: Http) {
    this.app = app;
    this.http = http;
    this.conferenceInfo = null;
    this.scheduleInfo = null;
    this.speakers = null;
  }

  retrieveData() {
    this.http.get('/app/data/info.json')
    // .toRx()
    // Call map on the response observable to get the parsed people object
    .map(res => res.json())
    // Subscribe to the observable to get the parsed people object and attach it to the
    // component
    .subscribe(data => {
      console.log('data retrieved', data);
      this.conferenceInfo = data;
    });

    this.http.get('/app/data/schedule.json')
    // .toRx()
    // Call map on the response observable to get the parsed people object
    .map(res => res.json())
    // Subscribe to the observable to get the parsed people object and attach it to the
    // component
    .subscribe(data => {
      console.log('schedule data retrieved', data);
      this.scheduleInfo = data;
    }); 

    this.http.get('/app/data/speakers.json')
    // .toRx()
    // Call map on the response observable to get the parsed people object
    .map(res => res.json())
    // Subscribe to the observable to get the parsed people object and attach it to the
    // component
    .subscribe(data => {
      console.log('speaker data retrieved', data);
      this.speakers = data;
    }); 
  }

  getData() {
    return this.conferenceInfo;
  }

  getSchedule() { 
    return this.scheduleInfo;
  }

  getSpeakers() {
    return this.speakers;
  }
}
