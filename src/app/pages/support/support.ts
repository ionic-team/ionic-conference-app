import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {
  AlertController,
  IonButton,
  IonButtons,
  IonContent,
  IonCol,
  IonHeader,
  IonMenuButton,
  IonRow,
  IonTextarea,
  IonTitle,
  IonToolbar,
  ToastController,
} from '@ionic/angular/standalone';

@Component({
    selector: 'page-support',
    templateUrl: 'support.html',
    styleUrls: ['./support.scss'],
    imports: [
        FormsModule,
        IonHeader,
        IonButton,
        IonButtons,
        IonContent,
        IonCol,
        IonHeader,
        IonMenuButton,
        IonRow,
        IonTextarea,
        IonTitle,
        IonToolbar,
    ],
    providers: [AlertController, ToastController]
})
export class SupportPage {
  private toastCtrl = inject(ToastController);

  submitted = false;
  supportMessage: string;

  async ionViewDidEnter() {
    const toast = await this.toastCtrl.create({
      message: 'This does not actually send a support request.',
      duration: 3000,
    });
    await toast.present();
  }

  async submit(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.supportMessage = '';
      this.submitted = false;

      const toast = await this.toastCtrl.create({
        message: 'Your support request has been sent.',
        duration: 3000,
      });
      await toast.present();
    }
  }
}
