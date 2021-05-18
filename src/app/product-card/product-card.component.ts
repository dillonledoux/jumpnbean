import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../data/product';
import { PRODUCTS } from '../data/product-data';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor() { }

  @Input() flower: Product;

  ngOnInit(): void {
    
  }

}
