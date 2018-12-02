import { 
    Pipe, 
    PipeTransform 
 } from '@angular/core';  

 @Pipe ({ 
    name: 'TitleCase' 
 }) 
 
 export class TitlePipe implements PipeTransform { 
    transform(value: string, add: string): string { 
      // name = value[0].toUpperCase+""+value.substr(1).toLowerCase;
       return value; 
    } 
 } 