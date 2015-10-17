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
    this.http.get('app/data/info.json')
      // Call map on the response observable to get the parsed people object
      .map(res => res.json())
      // Subscribe to the observable to get the parsed people object and attach it to the
      // component
      .subscribe(data => {
        this.conferenceInfo = data;
      });

    this.http.get('app/data/schedule.json')
      // Call map on the response observable to get the parsed people object
      .map(res => res.json())
      // Subscribe to the observable to get the parsed people object and attach it to the
      // component
      .subscribe(data => {
        this.scheduleInfo = data;
      });

    this.http.get('app/data/speakers.json')
      // Call map on the response observable to get the parsed people object
      .map(res => res.json())
      // Subscribe to the observable to get the parsed people object and attach it to the
      // component
      .subscribe(data => {
        this.speakers = data;
      });

    this.http.get('app/data/categories.json')
      // Call map on the response observable to get the parsed people object
      .map(res => res.json())
      // Subscribe to the observable to get the parsed people object and attach it to the
      // component
      .subscribe(data => {
        this.categories = data;
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

  getCategories() {
    return this.categories;
  }

  // TODO return the filter
  getShowFilterCategory(category) {
    var showFilter;
    return true;
  }
}
