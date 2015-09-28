import {View, Component} from 'angular2/angular2';
import * as moment from 'moment';

@Component({
  selector: 'date-format',
  properties: ['value', 'format']
})

@View({
  template: '<span>{{formattedDate}}</span>'
})

export class DateFormat {
  constructor() {
    this.formattedDate = this.test;
  } 
  onInit() {
    // let val = moment(this.value, 'MM/DD/YYYY');
    let val = moment(this.value);
    if (this.format) {
      this.formattedDate = val.format(this.format);
    } else {
      this.formattedDate = val;
    }
  }
}
