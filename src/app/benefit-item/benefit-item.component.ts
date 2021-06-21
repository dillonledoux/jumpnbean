import { Component, Input, OnInit } from '@angular/core';
import { Benefit_Attr } from '../models/benefit-attr';

@Component({
  selector: 'app-benefit-item',
  templateUrl: './benefit-item.component.html',
  styleUrls: ['./benefit-item.component.css']
})
export class BenefitItemComponent implements OnInit {

  @Input() item_info : Benefit_Attr;

  constructor() { }

  ngOnInit(): void {

  }

}
