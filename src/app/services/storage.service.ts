import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class StorageService  {
  async setPushNotesModalShown() {
    await Preferences.set({
      key: 'pushmodalshown',
      value: 'true'
    });
  }

  async getPushNotesModalShown() {
    const { value } = await Preferences.get({ key: 'pushmodalshown'});
    return value;
  }
}
