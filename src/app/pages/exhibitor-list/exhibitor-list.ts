import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-exhibitor-list',
  templateUrl: './exhibitor-list.html',
  styleUrls: ['./exhibitor-list.scss'],
})


export class ExhibitorListPage {
  filterTerm: string;
  exhibitors = [];
  currentExhibitors = [];
  Exhibitors = [];
//  filterList = [];

  constructor(private dataService: DataService) {
    this.dataService.getExhibitors().subscribe(res => {
      console.log(res);
      this.exhibitors = res;
    })
  }

  async initializeItems() {
 this.dataService.getExhibitors().subscribe(res => {
  this.exhibitors = res;
 // console.log(currentExhibitors);
  //this.exhibitors = currentExhibitors;
})

   }

  async filterList(search) {
this.initializeItems();

console.log(search);
if (!search) {
  return;
}

//this.exhibitors = this.exhibitors.filter((exhibit) => {
//  return (exhibit.toLowerCase().indexof(search.toLowerCase()) > -1);

//})
//this.currentExhibitors = this.exhibitors.filter((exhibitors) => 
//{ 
//  return (exhibitors.name.includes(search));
//}
//)

this.exhibitors = this.exhibitors.filter(Exhibitors => {
  if (Exhibitors.name.includes(search)) {
   // return (Exhibitors.name.toLowerCase().indexOf(searchTerm.))
  console.log(Exhibitors);
 // this.initializeItems();
 }
this.exhibitors = this.exhibitors.filter(currentExhibitors => {
  if (currentExhibitors.name && search) {
    // return (currentExhibitors.name.toLowerCase().indexOf(searchTerm.))
  }
})
  })
  
  }
}