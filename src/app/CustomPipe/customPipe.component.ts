import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'custom.html' 
 
})
export class CustomPipe {
  title = 'app';
  name ="TitleCase";
  input = 0;
  input1 = 0;
}
