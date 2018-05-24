import { TestBed, inject } from '@angular/core/testing';

import { FlickService } from './flick.service';

describe('FlickService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlickService]
    });
  });

  it('should be created', inject([FlickService], (service: FlickService) => {
    expect(service).toBeTruthy();
  }));
});
