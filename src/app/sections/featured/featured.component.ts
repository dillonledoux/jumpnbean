import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { PRODUCTS, FEATURED_ITEMS } from '../../data/product-data';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  constructor() { }

  allProducts = PRODUCTS;
  featured_names = FEATURED_ITEMS;
  featured_items: Product[] = [];

  ngOnInit(): void {
    this.featured_names.map( name => {
      this.featured_items = this.featured_items.concat(this.returnItemByName(name, this.allProducts));
    });
    console.log(this.featured_items);
  }

  returnItemByName(name:string, list:Product[]): Product {
    return list.find( element => element.name == name );
  }
}
