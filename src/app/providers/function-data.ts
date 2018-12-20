import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionlData {

  getDateFormat(date: Date) {
    if (!date) {
      date = new Date();
    }
    const dateArray = date.toLocaleDateString().split('/');
    return dateArray[2] + '-' +
           this.reform2digits(dateArray[0]) + '-' +
           this.reform2digits(dateArray[1]);
  }

  getAmPmTimeFormat(time: string): string {
    if (!time) { return '00:00 am' ; }
    let t = +time.split(':')[0];
    let m = time.split(':')[1];
    if (t > 11) {
      m = m + ' pm';
      t = (t === 12) ? t : t - 12 ;
    } else {
      m = m + ' am';
    }
    return this.reform2digits(t) + ':' + m ;
  }

  get24HoursFormat(time: string): string {
    if (!time) { return '' ; }
    const data = time.split(' ');
    let t = +data[0].split(':')[0];
    const m = data[0].split(':')[1];
    if (data[1] === 'pm' && t < 12)  { t = t + 12 ; }
    const realTime = (t < 10 ? '0' : '') + t;
    return realTime + ':' + m ;
  }

  reform2digits(value): string {
    value = +value;
    return ((value < 10) ? '0' : '') + value ;
  }
}
