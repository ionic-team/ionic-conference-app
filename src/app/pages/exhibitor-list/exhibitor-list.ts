import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-exhibitor-list',
  templateUrl: './exhibitor-list.html',
  styleUrls: ['./exhibitor-list.scss'],
})
export class ExhibitorListPage {
  exhibitors = [];

  constructor(private dataService: DataService) {
    this.dataService.getExhibitors().subscribe(res => {
      console.log(res);
      this.exhibitors = res;
    })
  }

}

