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
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    
  }

  updateName() {
    this.name.setValue('Mike');
  }
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
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
    // TODO: Use EventEmitter with form value
    this.profileForm1 = this.fb.group({
      firstName1: ['', Validators.required],
      lastName1: [''],
      address1: this.fb.group({
        street1: [''],
        city1: [''],
        state1: [''],
        zip1: ['']
      }),
    });
    console.warn(this.profileForm1.value);
  }

  profileForm2 = new FormGroup({
    firstName3: new FormControl(''),
    lastName3: new FormControl(''),
    address3: new FormGroup({
      street3: new FormControl(''),
      city3: new FormControl(''),
      state3: new FormControl(''),
      zip3: new FormControl('')
    })
  });
  

  get aliases() {
    return this.profileForm2.get('aliases') as FormArray;
  }

  addAlias() {
    this.profileForm2 = this.fb.group({
      firstName3: ['', Validators.required],
      lastName3: [''],
      address3: this.fb.group({
        street3: [''],
        city3: [''],
        state3: [''],
        zip3: ['']
      }),
      aliases: this.fb.array([
        this.fb.control('')
      ])
    });
    this.aliases.push(this.fb.control(''));
  }
  
}
