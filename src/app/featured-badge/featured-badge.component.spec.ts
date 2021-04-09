import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedBadgeComponent } from './featured-badge.component';

describe('FeaturedBadgeComponent', () => {
  let component: FeaturedBadgeComponent;
  let fixture: ComponentFixture<FeaturedBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
