import { Injectable } from '@angular/core';
import { Router, CanMatch } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class CheckTutorial implements CanMatch  {
  constructor(private storage: Storage, private router: Router) {}

  canMatch() {
    return this.storage.get('ion_did_tutorial').then(res => {
      if (res) {
        this.router.navigate(['/app', 'tabs', 'schedule']);
        return false;
      } else {
        return true;
      }
    });
  }
}
