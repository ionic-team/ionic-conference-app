import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Speaker } from '../../types';
import { SpeakerService } from '../../services/speaker.service';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-speaker-view',
  templateUrl: './speaker-view.component.html',
  styleUrls: ['./speaker-view.component.scss'],
})
export class SpeakerViewComponent implements OnInit {
  public speaker: Speaker;

  @Input() id: number;

  constructor(
    private speakerService: SpeakerService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.speaker = this.speakerService.getSpeaker(this.id);
  }

  closeModal() {
    this.modalController.dismiss();
  }

  async openLink(link: string) {
    await Browser.open({ url: link})
  }

}
