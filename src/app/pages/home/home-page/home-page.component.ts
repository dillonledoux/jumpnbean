import { Component, OnInit } from '@angular/core';
import { AgeVerificationService } from 'src/app/age-verification.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public ageVer: AgeVerificationService) { }

  ngOnInit(): void {
  }

}
