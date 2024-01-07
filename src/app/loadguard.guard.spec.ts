import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { loadguardGuard } from './loadguard.guard';

describe('loadguardGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loadguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
