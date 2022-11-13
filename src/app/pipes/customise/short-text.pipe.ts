import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText'
})
export class ShortTextPipe implements PipeTransform {

  transform(value: any, size: number = 5): unknown {
    return value.substr(0, size) + '...';
  }

}
