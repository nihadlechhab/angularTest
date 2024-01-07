import { CanActivateChildFn } from '@angular/router';

export const adminAccesGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
