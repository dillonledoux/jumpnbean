import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.css']
})
export class ContactUsFormComponent implements OnInit {

  form:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      "name": new FormControl("", [Validators.required]),
      "email": new FormControl("", [Validators.required, Validators.email]),
      "phone": new FormControl("", [Validators.required, Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}')]),
      "city": new FormControl("", [Validators.required]),
      "description": new FormControl("", [Validators.required])
    });
  }

  get name() {
    return this.form.get('name');
  }
  get email(){
    return this.form.get('email');
  }
  get phone(){
    return this.form.get('phone');
  }
  get city(){
    return this.form.get('city');
  }

  onSubmit(): void {
    console.log("form submitted!");
    console.log("Name" + this.form.controls.name.value);
    console.log("email" + this.form.controls.email.value);
    console.log(this.form);
  }

}
//[disabled]="!form.valid"