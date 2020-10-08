import { TestBed } from '@angular/core/testing';

import { ImageserviceService } from './imageservice.service';

describe('ImageserviceService', () => {
  let service: ImageserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
