import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Sponsor, SponsorTier } from '../../types';
import { SponsorService } from '../../services/sponsor.service';
import { SponsorViewComponent } from '../sponsor-view/sponsor-view.component';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-sponsor-card',
  templateUrl: './sponsor-card.component.html',
  styleUrls: ['./sponsor-card.component.scss'],
})
export class SponsorCardComponent implements OnInit {
  @Input() id: number;
  @Input() button: boolean = false;

  public sponsor: Sponsor;

  constructor(
    private sponsorService: SponsorService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.sponsor = this.sponsorService.getSponsor(this.id);
  }

  async openLink(link: string) {
    await Browser.open({ url: link})
  }

}
