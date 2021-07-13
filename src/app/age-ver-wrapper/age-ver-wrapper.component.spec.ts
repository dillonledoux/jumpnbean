import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeVerWrapperComponent } from './age-ver-wrapper.component';

describe('AgeVerWrapperComponent', () => {
  let component: AgeVerWrapperComponent;
  let fixture: ComponentFixture<AgeVerWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeVerWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeVerWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
