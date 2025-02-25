import { inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { AlertController } from '@ionic/angular/standalone';
import { SupportPage } from '../pages/support/support';

export const canDeactivateSupportPage: CanDeactivateFn<SupportPage> = async (
  component: SupportPage
) => {
  // If the support message is empty we should just navigate
  if (
    !component.supportMessage ||
    component.supportMessage.trim().length === 0
  ) {
    return true;
  }

  const alertCtrl = inject(AlertController);
  const alert = await alertCtrl.create({
    header: 'Leave this page?',
    message:
      'Are you sure you want to leave this page? Your support message will not be submitted.',
    buttons: [
      {
        text: 'Stay',
        role: 'cancel',
        handler: () => false,
      },
      {
        text: 'Leave',
        handler: () => true,
      },
    ],
  });

  await alert.present();
  const { role } = await alert.onDidDismiss();
  return role !== 'cancel';
};
