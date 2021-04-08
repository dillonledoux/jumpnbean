import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PostService } from '../post.service';

import { Contact } from '../contact';


@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.css']
})
export class ContactUsFormComponent implements OnInit {

  form:FormGroup;
  newContact:Contact;
  submission:boolean;
  success:string;

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.success = `{"result": "Success."}`;

    this.form = new FormGroup({
      "name": new FormControl("", [Validators.required]),
      "email": new FormControl("", [Validators.required, Validators.email]),
      "phone": new FormControl("", [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
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
  get description(){
    return this.form.get('description');
  }

  onSubmit(): void {
    this.newContact = new Contact(this.form.controls.name.value, this.form.controls.email.value, this.form.controls.phone.value, this.form.controls.city.value, this.form.controls.description.value);
    console.log(this.newContact);

    this.postService.contactUsPost(this.newContact).subscribe(data => {
      //console.log(data);
      
      if(data == null || data.errorType ){
        this.submission = false
      }
      else{
        this.submission = true;
      }
      //console.log(this.submission);
    });

    
  }

}
//[disabled]="!form.valid"