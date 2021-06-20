import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us-block',
  templateUrl: './contact-us-block.component.html',
  styleUrls: ['./contact-us-block.component.css']
})
export class ContactUsBlockComponent implements OnInit {

  @Input() info : string = "Contact Us";

  constructor() { }

  ngOnInit(): void {
  }

}
