/**
* This is a custom pipe which converts a string into a Date object
* in order to use Angular's pipe to format a date.
*
* DatePipes are currently only working on Chrome and Opera
* so until this is fixed we are using a custom date-format Component
* in order to style our dates.
*
* See this issue https://github.com/angular/angular/issues/3333
*
**/

import {Pipe} from 'angular2/angular2';

// Pipe to convert a string to a date object
@Pipe({
  name: 'convertDate'
})
export class ConvertDate {
  transform(value, args) {
    return new Date(value);
  }
}
