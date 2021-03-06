import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { PRODUCTS } from '../../../data/product-data';
import { AgeVerificationService } from 'src/app/age-verification.service';

@Component({
  selector: 'app-all-products-page',
  templateUrl: './all-products-page.component.html',
  styleUrls: ['./all-products-page.component.css']
})
export class AllProductsPageComponent implements OnInit {

  constructor(public ageVer: AgeVerificationService) { }

  items : Product[];

  ngOnInit(): void {
    this.items = PRODUCTS;
  }
}
