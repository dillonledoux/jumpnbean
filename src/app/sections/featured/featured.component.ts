import { Component, OnInit } from '@angular/core';
import { FeaturedItem } from '../../types/FeaturedItem';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  constructor() { }

  item:FeaturedItem;

  ngOnInit(): void {
    this.item = new FeaturedItem(
      "https://s3.amazonaws.com/www.jumpnbeanpharms.net/images/white-daisy.jpg",
      "test",
      "candy corn"
    );
  }

}
