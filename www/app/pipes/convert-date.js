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
