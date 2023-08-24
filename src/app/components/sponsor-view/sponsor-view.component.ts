import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SponsorService } from '../../services/sponsor.service';
import { Sponsor } from '../../types';

@Component({
  selector: 'app-sponsor-view',
  templateUrl: './sponsor-view.component.html',
  styleUrls: ['./sponsor-view.component.scss'],
})
export class SponsorViewComponent implements OnInit {
  @Input() id: number;

  public sponsor: Sponsor;

  constructor(
    private sponsorService: SponsorService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.sponsor = this.sponsorService.getSponsor(this.id);
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
