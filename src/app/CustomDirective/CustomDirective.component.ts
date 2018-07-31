import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'customDirective.html'
})
export class CustomDirectiveComponent {
  title = 'app';
  showYellow = true;
  showRed = false;
  value = "Red";
  check = true;

  showFunction(){
    if(this.check){
      this.showYellow = false;
      this.showRed = true;
      this.value = "Yellow";
      this.check = false;
    }else{
      this.showYellow = true;
      this.showRed = false;
      this.value = "Red";
      this.check = true;
    }
  }
  
  
}
