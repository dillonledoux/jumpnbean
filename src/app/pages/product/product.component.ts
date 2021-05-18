import { Component, OnInit } from '@angular/core';
import { Product } from '../../data/product';
import { PRODUCTS } from '../../data/product-data';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  items : Product[];

  ngOnInit(): void {
    this.items = PRODUCTS;
  }

}
