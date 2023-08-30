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
  items: string[];
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
  // this.exhibitors = this.exhibitors.filter(currentExhibitors => {

  // })
 // console.log(currentExhibitors);
  //this.exhibitors = currentExhibitors;
})

   }

  async filterList(search) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = search.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.exhibitors = this.exhibitors.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


  async filterList2(search) {
// this.initializeItems();

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
 // if (Exhibitors.name.includes(search)) {
   // return (Exhibitors.name.toLowerCase().indexOf(searchTerm.))
 // console.log(Exhibitors);
 // this.initializeItems();
 //}
//this.exhibitors = this.exhibitors.filter(currentExhibitors => {
//  if (currentExhibitors.name.includes(search)) {
//    console.log(currentExhibitors);
    // return (currentExhibitors.name.toLowerCase().indexOf(searchTerm.))
//  }
//})
  })
  
  }
}