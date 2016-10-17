import { Component } from '@angular/core';
import { BarcodeScanner, EmailComposer } from 'ionic-native';
import { NavController, FabContainer } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'qr-scanner',
  templateUrl: 'qr.html'
})
export class QRPage {
  contacts = [];
  constructor(public nav: NavController, public storage: Storage) {
    this.storage.get('contacts').then( (contacts) => {
      if (contacts) {
        this.contacts = contacts;
      }
    }, (err) => {
    });
  }

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
      console.log(this.contacts);
      BarcodeScanner.scan().then((data) => {
          const vcard = data.text;
          const contact = {
              'name': this.getFirstName(vcard) + ' ' + this.getLastName(vcard),
              'email': this.getEmail(vcard),
              'org': this.getOrg(vcard),
              'title': this.getTitle(vcard)
          };
          this.contacts.push(contact);
          this.storage.set('contacts', this.contacts).then((success) => {
            // Make toast
            console.log('saved');
          }, (err) => {
            console.log('err');
          });
      }, (err) => {
          console.log(err);
      })
  }

  generateContactCsv(contacts) {
      let csvContacts = "";
      for (var i = 0; i < contacts.length; i++) {
        //csvContacts.push(JSON.stringify(contacts[i]));
        //let contact = Object.keys(contacts[i])
        let contact = contacts[i];
        csvContacts += contact.name + ',' + contact.email + ',' + contact.org + ',' + contact.title
        csvContacts += "\n"
      }
      return csvContacts;
  }

  share() {
      EmailComposer.isAvailable().then(() => {
        console.log('available');
        this.storage.get('contacts').then( (contacts) => {
          console.log(contacts);
          if (contacts) {
            var emailOpts = {
              to: [''],
              subject: 'Your scanned contacts',
              body: this.generateContactCsv(contacts),
              isHtml: false
            };

            EmailComposer.open(emailOpts).then(function() {
              console.log('email');
            }, function () {
              // user cancelled email
            });
          }
        }, (err) => {
          console.log('error loading contacts');
        });
      }, () => {
        console.log('not available');
      });
  }
}
