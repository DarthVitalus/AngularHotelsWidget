import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(array: any[], params: any): any[] {
    const result = array.filter((item: any) => {
      return item[params.propName] === params.value;
    });

    return result;
  }

}
