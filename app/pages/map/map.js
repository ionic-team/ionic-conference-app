import {Page} from 'ionic-angular';
import {Inject} from 'angular2/core';
import {ConferenceData} from '../../providers/conference-data';


@Page({
  templateUrl: 'build/pages/map/map.html'
})
export class MapPage {
  static get parameters() {
    return [[ConferenceData]];
  }

  constructor(confData) {
    this.confData = confData;
  }

  onPageLoaded() {
    this.confData.getMap().then(mapData => {
      let mapEle = document.getElementById('map');

      let map = new google.maps.Map(mapEle, {
        center: mapData.find(d => d.center),
        zoom: 16
      });

      mapData.forEach(markerData => {
        let infoWindow = new google.maps.InfoWindow({
          content: `<h5>${markerData.name}</h5>`
        });

        let marker = new google.maps.Marker({
          position: markerData,
          map: map,
          title: markerData.name
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      });

      google.maps.event.addListenerOnce(map, 'idle', () => {
        mapEle.classList.add('show-map');
      });

    });
  }
}
