import { TestBed, inject } from '@angular/core/testing';

import { MobileInfoService } from './mobileInfo.service';

describe('MobileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MobileInfoService]
    });
  });

  it('should be created', inject([MobileInfoService], (service: MobileInfoService) => {
    expect(service).toBeTruthy();
  }));
});
