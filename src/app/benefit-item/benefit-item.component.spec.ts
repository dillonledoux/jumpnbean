import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitItemComponent } from './benefit-item.component';

describe('BenefitItemComponent', () => {
  let component: BenefitItemComponent;
  let fixture: ComponentFixture<BenefitItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
