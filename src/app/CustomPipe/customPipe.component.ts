import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<p>mul: {{25 | AddCustomPipe: 10}}</p>' 
 
})
export class CustomPipe {
  title = 'app';
  name ="TitleCase";

}
