import { 
    Pipe, 
    PipeTransform 
 } from '@angular/core';  
 
 @Pipe ({ 
    name: 'AddCustomPipe' 
 }) 
 
 export class AddPipe implements PipeTransform { 
    transform(value: number, add: string): number { 
       let mul = parseFloat(add); 
       return mul + value 
    } 
 } 