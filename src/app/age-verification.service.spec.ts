import { TestBed } from '@angular/core/testing';

import { AgeVerificationService } from './age-verification.service';

describe('AgeVerificationServiceService', () => {
  let service: AgeVerificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgeVerificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
