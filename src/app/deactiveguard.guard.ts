import { CanDeactivateFn } from '@angular/router';

export const deactiveguardGuard: CanDeactivateFn<unknown> = (LoansComponent, currentRoute, currentState, nextState) => {

  return true;
};
