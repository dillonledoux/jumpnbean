import { Component, OnInit } from '@angular/core';
import { faInstagramSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faInstagramSquare = faInstagramSquare;
  faFacebookSquare = faFacebookSquare;

  constructor() { }

  ngOnInit(): void {
  }

}
