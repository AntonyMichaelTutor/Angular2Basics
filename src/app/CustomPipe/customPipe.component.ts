import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<p>Add: {{2 | AddCustomPipe: 10}}</p>' 
 
})
export class CustomPipe {
  title = 'app';
  name ="";

}
