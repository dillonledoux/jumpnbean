import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../../../../models/product';
import { PRODUCTS } from '../../../../data/product-data';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css']
})
export class ProductDetailsPageComponent implements OnInit {

  name: string;
  item: Product;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name');
    });

    this.item = this.returnItemByName(this.name, PRODUCTS);
    console.log(this.item);
  }
  
  returnItemByName(name:string, list:Product[]): Product {
    return list.find( element => element.name == name );
  }
}




