import { Component, OnInit } from '@angular/core';
import { FeaturedItem } from '../../models/FeaturedItem';
import { FEATURED_ITEMS } from '../../data/featured-products';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  constructor() { }

  items : FeaturedItem[];

  ngOnInit(): void {
    this.items = FEATURED_ITEMS;
  }

}
