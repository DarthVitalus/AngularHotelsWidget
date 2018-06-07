import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getProperty'
})
export class GetPropertyPipe implements PipeTransform {

  transform(sourceArray: any[], params: any): any[] {
    const result = sourceArray.map((item: any) => {
      return item[params.propName];
    });

    if (!params.uniqueOnly) {
      return result;
    }

    const unique = result.filter(function(item, i, ar) { return ar.indexOf(item) === i; });

    return unique;
  }

}
