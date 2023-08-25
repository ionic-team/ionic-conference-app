import { Component } from '@angular/core';
import { SpeakerService } from '../../services/speaker.service';
import { Speaker } from '../../types';

@Component({
  selector: 'app-speakers',
  templateUrl: './speaker-list.html',
  styleUrls: ['./speaker-list.scss'],
})
export class SpeakerListPage {
  public speakers: Speaker[] = [];

  constructor(
    speakerService: SpeakerService
  ) {
    this.speakers = speakerService.getSpeakers();
  }

  trackItems(index: number, itemObject: Speaker) {
    return itemObject.id;
  }
}
