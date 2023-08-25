import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { HubspotService } from '../../services/hubspot.service';
import { HubspotFormData } from '../../types';

@Component({
  selector: 'app-swag-modal',
  templateUrl: './swag-modal.page.html',
  styleUrls: ['./swag-modal.page.scss'],
})
export class SwagModalPage {
  @ViewChild('hubspotForm') hubspotForm: NgForm;

  constructor(
    private hubspotService: HubspotService,
    private modalController: ModalController
  ) {
    this.states = hubspotService.getStates();
   }

  public hubspotData: HubspotFormData = new HubspotFormData();
  public states: string[] = [];

  submitForm() {
    this.hubspotForm.onSubmit(undefined);
  }

  public async onSubmit() {
    if (!this.hubspotForm.valid) { return }

    const success = await this.hubspotService.submitToHubspot(this.hubspotData);

    if (success) {
      await this.modalController.dismiss(success);
    }
  }

  async closeModal() {
    await this.modalController.dismiss(null);
  }
}
