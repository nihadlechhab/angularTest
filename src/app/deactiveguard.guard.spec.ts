import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { deactiveguardGuard } from './deactiveguard.guard';

describe('deactiveguardGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => deactiveguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
