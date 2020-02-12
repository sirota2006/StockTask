import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform<T>(arr: T[], prop: string, fromLow = false): T[] {
    if (arr.length) {
      return arr.sort((a, b) => fromLow ? a[prop] - b[prop] : b[prop] - a[prop]);
    }
    return arr;
  }

}
