import { CanActivateFn } from '@angular/router';

export const accountInfoGuard: CanActivateFn = (route, state) => {
  return true;
};
