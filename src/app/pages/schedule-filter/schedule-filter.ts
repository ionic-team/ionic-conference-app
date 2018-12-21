import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';
import { User } from '../../models';

@Component({
  selector: 'page-schedule-filter',
  templateUrl: 'schedule-filter.html',
  styleUrls: ['./schedule-filter.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScheduleFilterPage implements AfterViewInit {
  user: User;
  trackFilter: { name: string, isChecked: boolean }[] = [];

  constructor(
    public dataProvider: ConferenceData,
    public modalCtrl: ModalController,
    public userProvider: UserData
  ) { }

  // TODO use the ionViewDidEnter event
  ngAfterViewInit() {
    this.userProvider.getUser().then(user => {
      this.user = user;
      this.trackFilter = user.trackFilter;
    });
  }

  resetFilters() {
    // reset all of the toggles to be checked
    this.trackFilter.forEach(track => {
      track.isChecked = true;
    });
  }

  applyFilters() {
    // update user's trackFilter
    this.user.trackFilter = this.trackFilter;
    this.userProvider.updateUser(this.user);

    // Pass back a new array of track names to exclude
    const excludedTrackNames = this.trackFilter.filter(c => !c.isChecked).map(c => c.name);
    this.dismiss(excludedTrackNames);
  }

  dismiss(data: any) {
    // using the injected ModalController this page
    // can "dismiss" itself and pass back data
    this.modalCtrl.dismiss(data);
  }
}
