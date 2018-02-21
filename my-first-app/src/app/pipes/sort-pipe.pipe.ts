import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPipe'
})
export class SortPipePipe implements PipeTransform {

  transform(value: any, propName: string): any {
    if (value.length === 0) {
      return value;
    } else {
      return value.sort((a, b) => {
        return a[propName] > b[propName];
      });
    }
  }

}
