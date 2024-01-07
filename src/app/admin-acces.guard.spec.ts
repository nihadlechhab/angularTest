import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { adminAccesGuard } from './admin-acces.guard';

describe('adminAccesGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => adminAccesGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
