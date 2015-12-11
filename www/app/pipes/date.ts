/**
* This is a custom pipe which converts a string into a Date object
* in order to use Angular's pipe to format a date.
*
* Angular2 DatePipes are currently only working on Chrome and Opera
* so until this is fixed we are using a custom date-format Component
* in order to style our dates.
*
* https://github.com/angular/angular/issues/3917
*
**/

import {Pipe} from 'angular2/angular2';

// Pipe to convert a string to a date object
@Pipe({
  name: 'date'
})
export class DatePipe {
  transform(value, args) {
    if (args.length) {
      let f = args[0];
      if (f === 'h:m') {
        // let s = value.split(':');
        // let h = parseInt(s[0], 10);
        // return (h > 12 ? h - 12) + ':' + s[1] + ' ' + (h > 12 ? 'p' : 'a') + 'm';
      }
    }
    return value;
  }
}
