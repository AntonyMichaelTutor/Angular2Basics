import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:'Data Binding<br><input type="text" [(ngModel)]="name"/><br><h2> {{name}}'
 
})
export class DataBinding {
  title = 'app';
  name ="";

}
