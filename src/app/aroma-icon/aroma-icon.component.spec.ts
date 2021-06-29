import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AromaIconComponent } from './aroma-icon.component';

describe('AromaIconComponent', () => {
  let component: AromaIconComponent;
  let fixture: ComponentFixture<AromaIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AromaIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AromaIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
