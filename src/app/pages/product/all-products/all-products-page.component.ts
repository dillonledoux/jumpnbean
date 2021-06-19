import { Component, OnInit } from '@angular/core';
import { Product } from '../../data/product';
import { PRODUCTS } from '../../data/product-data';

@Component({
  selector: 'app-all-products-page',
  templateUrl: './all-products-page.component.html',
  styleUrls: ['./all-products-page.component.css']
})
export class AllProductsPageComponent implements OnInit {

  constructor() { }

  items : Product[];

  ngOnInit(): void {
    this.items = PRODUCTS;
  }

}
