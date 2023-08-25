import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.html',
  styleUrls: ['./supplier.scss'],
})
export class SupplierPage {

  supPlatforms = [];

  constructor(private dataService: DataService) {
   this.dataService.getSupPlatform().subscribe(res => {
      console.log(res);
      this.supPlatforms = res;
   })
  }
}

