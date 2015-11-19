import {Page} from 'ionic/ionic';

@Page({
  templateUrl: 'app/map/map.html'
})
export class MapPage {
  constructor() {
    this.map = null;
  }

  addMarkerAndInfo(latLng, infoContent) {
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
