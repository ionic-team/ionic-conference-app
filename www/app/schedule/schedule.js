import {Page, Modal} from 'ionic/ionic';
import {Timeline} from '../timeline/timeline';
import {TimelineFilterPage} from '../timeline-filter/timeline-filter';


@Page({
  templateUrl: 'app/schedule/schedule.html',
  directives: [Timeline]
})
export class SchedulePage {
  constructor(modal: Modal) {
    this.modal = modal;

    this.filterDayIndex = 0;
    this.filterQueryText = '';
    this.filterTracks = [];
    this.filterSegment = 'all';
  }

  onQueryFilter() {
    console.log(this.filterQueryText)
  }

  openFilter() {

    this.modal.open(TimelineFilterPage, this.filterTracks).then(modalRef => {

      modalRef.onClose = (filteredTracks) => {
        this.filterTracks = filteredTracks;
      };

    });

  }

}
