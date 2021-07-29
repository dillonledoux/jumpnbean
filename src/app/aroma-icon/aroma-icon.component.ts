import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aroma-icon',
  templateUrl: './aroma-icon.component.html',
  styleUrls: ['./aroma-icon.component.css']
})
export class AromaIconComponent implements OnInit {
  
  @Input() aroma: string;

  readonly url = 'assets/images/icons/';
  link: string;

  constructor() { }

  ngOnInit(): void {
    this.link = this.url + this.aroma + '.png';
  }
}
