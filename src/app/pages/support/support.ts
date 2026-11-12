import { Component, inject } from '@angular/core';
import type { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
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
} from '@ionic/angular';

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
  providers: [AlertController, ToastController],
})
export class SupportPage {
  private toastCtrl = inject(ToastController);

  submitted = false;
  supportMessage: string;

  async ionViewDidEnter(): Promise<void> {
    const toast = await this.toastCtrl.create({
      message: 'This does not actually send a support request.',
      duration: 3000,
    });
    await toast.present();
  }

  async submit(form: NgForm): Promise<void> {
    this.submitted = true;

    if (form.valid) {
      // Clear the message and its touched state, so the empty field doesn't show its required message
      form.resetForm({ supportQuestion: '' });
      this.submitted = false;

      // Replace the notice if it's still open, so the two toasts don't overlap
      if (await this.toastCtrl.getTop()) {
        await this.toastCtrl.dismiss();
      }

      const toast = await this.toastCtrl.create({
        message: 'Your support request has been sent.',
        duration: 3000,
      });
      await toast.present();
    } else {
      // Show the required message even if the field was never touched
      form.control.markAllAsTouched();
    }
  }
}
