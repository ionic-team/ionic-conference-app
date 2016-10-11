import { Component } from '@angular/core';
import { BarcodeScanner } from 'ionic-native';
import { NavController, FabContainer } from 'ionic-angular';


@Component({
  selector: 'qr-scanner',
  templateUrl: 'qr.html'
})
export class QRPage {
  speakers = [];
  constructor(public nav: NavController) { }

  getLastName(vcard) {
    return vcard.split("\n")[1].split(';')[0].split(':')[1];
  }
  getFirstName(vcard) {
    return vcard.split("\n")[1].split(';')[1];
  }
  getEmail(vcard) {
    return vcard.split("\n")[2].split(':')[1];
  }
  getOrg(vcard) {
    return vcard.split("\n")[3].split(':')[1];
  }

  getTitle(vcard) {
    return vcard.split("\n")[4].split(':')[1];
  }

  scan(fab: FabContainer) {
      fab.close();
      BarcodeScanner.scan().then((data) => {        
          const vcard = data.text;
          const contact = {
              'name': this.getFirstName(vcard) + ' ' + this.getLastName(vcard),
              'email': this.getEmail(vcard),
              'org': this.getOrg(vcard),
              'title': this.getTitle(vcard)
          };
          this.speakers.push(contact);
      }, (err) => {
          console.log(err);
      })
  }
}
