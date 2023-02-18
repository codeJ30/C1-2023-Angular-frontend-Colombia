import { TestBed } from '@angular/core/testing';

import { ObtenerDepositService } from './obtener-deposit.service';

describe('ObtenerDepositService', () => {
  let service: ObtenerDepositService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerDepositService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
