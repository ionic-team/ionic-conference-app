import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionlData {

  getDataFormat(date: Date) {
    if (!date) {
      date = new Date();
    }
    const dateArray = date.toLocaleDateString().split('/');
    return dateArray[2] + '-' +
           this.reform2digits(dateArray[0]) + '-' +
           this.reform2digits(dateArray[1]);
  }

  reform2digits(value) {
    if (value.length === 1) { return '0' + value; }
    return value ;
  }
}
