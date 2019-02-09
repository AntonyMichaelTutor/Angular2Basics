import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  name = new FormControl('');
  dummy:boolean = false;
  constructor(private fb: FormBuilder) { }
  activate(){
    this.dummy = true;
  }
  ngOnInit() {
    
  }

  
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
  }
  profileForm1 = new FormGroup({
    firstName1: new FormControl(''),
    lastName1: new FormControl(''),
    address1: new FormGroup({
      street1: new FormControl(''),
      city1: new FormControl(''),
      state1: new FormControl(''),
      zip1: new FormControl('')
    })
  });
  onSubmit1() {
    
    console.warn(this.profileForm1.value);
  }
}
