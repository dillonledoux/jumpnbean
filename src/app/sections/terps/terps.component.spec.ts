import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerpsComponent } from './terps.component';

describe('TerpsComponent', () => {
  let component: TerpsComponent;
  let fixture: ComponentFixture<TerpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
