import { Component, OnInit, Input } from '@angular/core';
import { FeaturedItem } from '../models/FeaturedItem';

@Component({
  selector: 'app-featured-badge',
  templateUrl: './featured-badge.component.html',
  styleUrls: ['./featured-badge.component.css']
})
export class FeaturedBadgeComponent implements OnInit {

  @Input() item:FeaturedItem;
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
