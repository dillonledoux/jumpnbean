import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Contact } from '../models/contact';

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
  durationInSeconds = 4;
  @Input() product: string = "general request";

  constructor( private postService:PostService,
               private _snackBar: MatSnackBar ) { }

  openSnackBarSuccess() {
    this._snackBar.openFromComponent(SnackBarSuccess, {
      duration: this.durationInSeconds * 1000,
    });
  }

  openSnackBarFailure() {
    this._snackBar.openFromComponent(SnackBarFailure, {
      duration: this.durationInSeconds * 1000,
    });
  }

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
    if(!this.product){
      this.product = "Product not provided."
    }
    this.newContact = new Contact(this.form.controls.name.value, this.form.controls.email.value, this.form.controls.phone.value, this.form.controls.city.value, this.form.controls.description.value, this.product);
    this.postService.contactUsPost(this.newContact).subscribe(data => {
      
      if(data == null || data.errorType ){
        this.submission = false
        this.openSnackBarFailure();
      }
      else{
        this.submission = true;
        this.openSnackBarSuccess();
      }
    });
  }
}

@Component({
  selector: 'snack-bar-component-success',
  template: `
    <span class='snack-bar-success'>
      Request received! We will be in contact.
    </span>
  `,
  styles: [`
    .snack-bar-success {
      color: seagreen;
    }
  `],
})
export class SnackBarSuccess {}

@Component({
  selector: 'snack-bar-component-failure',
  template: `
    <span class='snack-bar-failure'>
      Request failed! Please try again later.
    </span>
  `,
  styles: [`
    .snack-bar-failure {
      color: red;
    }
  `],
})
export class SnackBarFailure{}