import { Component, OnInit } from '@angular/core';
import { AgeVerificationService } from '../age-verification.service'

@Component({
  selector: 'app-age-ver-wrapper',
  templateUrl: './age-ver-wrapper.component.html',
  styleUrls: ['./age-ver-wrapper.component.css']
})
export class AgeVerWrapperComponent implements OnInit {

  constructor( public ageVer: AgeVerificationService ) { 
  }

  ngOnInit(): void {
  }
}
