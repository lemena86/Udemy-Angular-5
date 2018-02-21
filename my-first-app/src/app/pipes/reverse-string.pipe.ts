import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString'
})
export class ReverseStringPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length === 0) {
      return value;
    } else {
      return this.reverse(value);
    }
  }

  reverse(str: string): string {
    return str.split('').reverse().join('');
  }

}
