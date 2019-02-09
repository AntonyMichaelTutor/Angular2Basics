import { TestBed, inject } from '@angular/core/testing';

import { PopcornServiceService } from './popcorn-service.service';

describe('PopcornServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopcornServiceService]
    });
  });

  it('should be created', inject([PopcornServiceService], (service: PopcornServiceService) => {
    expect(service).toBeTruthy();
  }));
});
