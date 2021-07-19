import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-featured-badge',
  templateUrl: './featured-badge.component.html',
  styleUrls: ['./featured-badge.component.css']
})
export class FeaturedBadgeComponent implements OnInit {

  @Input() item:Product;
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
