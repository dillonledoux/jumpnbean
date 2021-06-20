import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsBlockComponent } from './contact-us-block.component';

describe('ContactUsBlockComponent', () => {
  let component: ContactUsBlockComponent;
  let fixture: ComponentFixture<ContactUsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
