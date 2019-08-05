import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newlines'
})
export class NewlinesPipe implements PipeTransform {
  transform(input: any): any {
    if (typeof input !== 'string') {
      return input;
    }

    return input.replace(/(?:\r\n|\r|\n)/g, '<br />');
  }
}
