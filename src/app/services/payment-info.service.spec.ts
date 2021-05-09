import { TestBed } from '@angular/core/testing';

import { PaymentInfoService } from './payment-info.service';

describe('PaymentInfoService', () => {
  let service: PaymentInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
