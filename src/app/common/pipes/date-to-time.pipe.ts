import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateToTime'
})
export class DateToTimePipe implements PipeTransform {

  transform(date: Date): string {
    return ('0' + date.getHours()).slice(-2) + ':' +
      ('0' + date.getMinutes()).slice(-2) + ':' +
      ('0' + date.getSeconds()).slice(-2);
  }

}
