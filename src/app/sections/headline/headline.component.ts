import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {

  @Input() bigHeadlineText: string;
  @Input() subtitleText: string;
  @Input() viewProductLinkVisible: boolean;
  @Input() logoVisible: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }


}
