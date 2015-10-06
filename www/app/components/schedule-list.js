import {View, Component, NgIf, NgFor} from 'angular2/angular2';
import {Icon, Item, List, ListHeader} from 'ionic/ionic';

@Component({
  selector: 'schedule-list',
  properties: ['data', 'favorites']
})

@View({
  template: '<div *ng-if="data.length > 0">' +
              '<ion-list class="outer-content" *ng-for="#timeSlot of data">' +
                '<ion-header>' +
                  '{{timeSlot.time}}' +
                '</ion-header>' +
                '<ion-item *ng-for="#session of timeSlot.talks">' +
                  '<span>{{session.name}}</span>' +
                  '<button item-right (click)="addFavorite(timeSlot, session, $event)">+</button>' +
                  '<button item-right (click)="openSession(session)">V</button>' +
                  '<div item-right>' +
                    '<icon pin></icon>' +
                    '<span>&nbsp;{{session.location}}</span>' +
                  '</div>' +
                '</ion-item>' +
              '</ion-list>' +
            '</div>' +
            '<div *ng-if="data.length == 0"><h4>No favorites</h4></div>',
  directives: [Icon, Item, List, ListHeader, NgFor, NgIf]
})

export class ScheduleList {
  constructor() {
    console.log('this.data', this.data);
  } 

  onInit() {
    console.log('onInit ScheduleList');
  }

  addFavorite(timeSlot, session, event) {
    console.log('timeslot:', timeSlot, 'add session', session, event);
    // this.favorites.push(session);
    var currTimeSlot;
    this.favorites.forEach(function(t) {
      if (t.time == timeSlot.time) {
        currTimeSlot = t;
      }
    });
    if (!currTimeSlot) {
      currTimeSlot = { time: timeSlot.time, talks:[] };
      currTimeSlot.talks.push(session);
      this.favorites.push(currTimeSlot);
    } else {
      console.log('we had timeslot');
      currTimeSlot.talks.push(session);
    }


    console.log('currTimeSlot', currTimeSlot);
    console.log('favorites', this.favorites);
    event.preventDefault();
    return false;
  }

  openSession(session) {
    this.nav.push(SessionDetailPage, session);
  }
}
