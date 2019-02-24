import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'pipe.html'
})
export class PipeComponent {
  title = 'app';
  birthday = new Date(1994, 7, 22); // April 15, 1988

  

 jsonValue = { moo: 'foo', goo: { too: 'new' }};

  flag:boolean=true;
  toggle = true; // start with true == shortDate
  format1:string = 'shortDate';
  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }

  toggleFormat1(){
    if(this.flag){
      this.format1 = 'fullDate';
      this.flag = false;
    }else{
      this.flag = true;
      this.format1 = 'shortDate';
    }
  }

}
