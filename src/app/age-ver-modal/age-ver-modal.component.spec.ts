import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeVerModalComponent } from './age-ver-modal.component';

describe('AgeVerModalComponent', () => {
  let component: AgeVerModalComponent;
  let fixture: ComponentFixture<AgeVerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeVerModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeVerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
