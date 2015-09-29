import {IonicView, NavController, IonicApp} from 'ionic/ionic';
import {DataService} from '../service/data';
import {Http, HTTP_BINDINGS} from "angular2/http";
import {DateFormat} from '../components/date-format';

@IonicView({
  templateUrl: 'app/map/map.html',
  bindings: [DataService, Http],
  viewBindings: [HTTP_BINDINGS],
  directives: [DateFormat]
})

export class MapPage {
  constructor(nav: NavController, app: IonicApp, data: DataService) {
    this.map = null;
  }

  onInit() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 36.964, lng: -122.015},
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    });
  }
}
