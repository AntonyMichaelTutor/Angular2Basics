import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mul'
})
export class MulPipe implements PipeTransform {

  transform(value: number, mul: number): number { 
    return mul * value 
 } 

}
