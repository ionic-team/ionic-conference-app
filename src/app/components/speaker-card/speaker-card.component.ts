import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SpeakerViewComponent } from '../speaker-view/speaker-view.component';
import { Company, Speaker } from '../../types';
import { SpeakerService } from '../../services/speaker.service';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-speaker-card',
  templateUrl: './speaker-card.component.html',
  styleUrls: ['./speaker-card.component.scss'],
})
export class SpeakerCardComponent implements OnInit {
  public speaker: Speaker;
  public company: Company;

  @Input() id: number;
  @Input() button: boolean = false;
  @Input() safeArea: boolean = false;

  constructor(
    private speakerService: SpeakerService,
    private companyService: CompanyService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.speaker = this.speakerService.getSpeaker(this.id);
    this.company = this.companyService.getCompany(this.speaker.companyId);
  }

  async presentModal() {
    if (!this.button) return;

    const modal = await this.modalController.create({
      component: SpeakerViewComponent,
      componentProps: {
        id: this.id
      }
    });

    modal.present();
  }

}
