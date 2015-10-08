import {IonicApp, IonicView, NavController, Page} from 'ionic/ionic';
import {DataService} from '../service/data';
import {Http, HTTP_BINDINGS} from "angular2/http";
import {DateFormat} from '../components/date-format';

@Page({
  templateUrl: 'app/map/map.html',
  bindings: [DataService, Http],
  viewBindings: [HTTP_BINDINGS],
  directives: [DateFormat]
})

export class MapPage {
  constructor(nav: NavController, app: IonicApp, data: DataService) {
    this.map = null;
  }

  addMarkerAndInfo(latLng, infoContent) {
    debugger;
    var infowindow = new google.maps.InfoWindow({
      content: ['<h5>', infoContent, '</h5>'].join('')
    });

    var marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      title: infoContent
    });

    marker.addListener('click', function() {
      infowindow.open(this.map, marker);
    });
  }

  onInit() {
    var ionicHqLatLng = {lat: 43.07421, lng: -89.38119};
    var afterPartyLatLng = {lat: 43.07336, lng: -89.38335};
    var conferenceCenterLatLng = {lat: 43.07276, lng: -89.38076};

    this.map = new google.maps.Map(document.getElementById('map'), {
      center: ionicHqLatLng,
      zoom: 18
    });

    this.addMarkerAndInfo(ionicHqLatLng, 'Ionic HQ');
    this.addMarkerAndInfo(conferenceCenterLatLng, 'Conference Center');
    this.addMarkerAndInfo(afterPartyLatLng, 'Afterparty - Brocach Irish Pub');

  }
}
