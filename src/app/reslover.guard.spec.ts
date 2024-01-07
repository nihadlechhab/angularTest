import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { resloverGuard } from './reslover.guard';

describe('resloverGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => resloverGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
