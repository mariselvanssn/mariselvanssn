
import { Pipe, PipeTransform } from '@angular/core';
import { GlobalHelpers } from '@graphics-flow/util';

@Pipe({
  name: 'contrastColor'
})
export class ContrastColorPipe implements PipeTransform {

  constructor() {
  }

  transform(value: string): any {
    return GlobalHelpers.getContrastColorValue(value) <= 0.12 ? '#E0E0E0' : value;
  }

}
