import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template:'Custom Data Binding<Br><button (click)="decrement()">-</button>{{counter}}<button (click)="increment()">+</button>'
})
export class CustomDataBinding {
  title = 'app';
  counterValue = 0;

  /*get counter() {
    return this.counterValue;
  }

  set counter(value) {
    this.counterValue = value;
  }

  decrement() {
    this.counter--;
  }

  increment() {
    this.counter++;
  }*/
  
  count : number = 0;   

     @Output() counterChange :  EventEmitter<number>;
        constructor(){
         
            this.counterChange = new EventEmitter();
         
        }
     
     @Input() 
        get counter(){

            return this.count; 
        }

        increment(){

            this.count = this.count+1; 
            this.counterChange.emit(this.count);
        }

        decrement(){
            this.count = this.count - 1; 
            this.counterChange.emit(this.count);
        }


}
