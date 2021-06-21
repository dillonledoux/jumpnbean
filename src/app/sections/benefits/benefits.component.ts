import { Component, OnInit } from '@angular/core';
import { BENEFIT_ITEMS } from '../../data/benefit-items'


@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent implements OnInit {

  readonly benefit_items = BENEFIT_ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
