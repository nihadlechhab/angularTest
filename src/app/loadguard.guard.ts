import { CanMatchFn } from '@angular/router';

export const loadguardGuard: CanMatchFn = (route, segments) => {
  return true;
};
