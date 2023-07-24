import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-exhibitor-list',
  templateUrl: 'exhibitor-list.html',
  styleUrls: ['./exhibitor-list.scss'],
})
export class ExhibitorListPage {
  exhibitors: any [] = [];

  constructor(public confData: ConferenceData) {}

  ionViewDidEnter() {
    this.confData.getExhibitors().subscribe((exhibitors: any[]) => {
      this.exhibitors = exhibitors;
    });
  }
}
