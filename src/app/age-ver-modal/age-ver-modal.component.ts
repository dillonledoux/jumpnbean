import { Component, OnInit } from '@angular/core';
import { AgeVerificationService } from '../age-verification.service';

@Component({
  selector: 'app-age-ver-modal',
  templateUrl: './age-ver-modal.component.html',
  styleUrls: ['./age-ver-modal.component.css']
})
export class AgeVerModalComponent implements OnInit {

  constructor(public ageVer: AgeVerificationService) { }

  ngOnInit(): void {
  }

}
