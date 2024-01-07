import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { accountInfoGuard } from './account-info.guard';

describe('accountInfoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => accountInfoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
