import { TestBed } from '@angular/core/testing';

import { AgeVerificationServiceService } from './age-verification-service.service';

describe('AgeVerificationServiceService', () => {
  let service: AgeVerificationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgeVerificationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
