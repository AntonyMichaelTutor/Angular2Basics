import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //template:'<p>birthday is {{ birthday | date }}</p>'
  //template:'<p> birthday is {{ birthday | date:"MM/dd/yy" }} </p>'
  template: `  <p>The hero's birthday is {{ birthday | date:format }}</p><button (click)="toggleFormat()">Toggle Format</button>`
})
export class PipeComponent {
  title = 'app';
  birthday = new Date(1994, 7, 22); // April 15, 1988

  toggle = true; // start with true == shortDate

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }


}
