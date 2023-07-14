import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimal'
})
export class DecimalPipe implements PipeTransform {

  transform(value: number):any {

    let decimal=(Math.round((value*100)/100)).toFixed(2)
    return decimal;
  }

}
