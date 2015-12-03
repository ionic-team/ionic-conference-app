import {Component} from 'angular2/angular2';
// Note we import the module in webpack.config.js, as a node_module thats installed locally
import * as moment from 'moment';

@Component({
  properties: ['value', 'format'],
  selector: 'date-format',
  template: '<span>{{formattedDate}}</span>'
})
export class DateFormat {
  constructor() {
    this.formattedDate = this.test;
  }
  onInit() {
    let format = this.format || 'h:m';
    let rawDateTime = moment(this.value, 'MM/DD/YYYY hh:mm');
    if (this.format) {
      this.formattedDate = rawDateTime.format(this.format);
    } else {
      this.formattedDate = val;
    }
  }
}
