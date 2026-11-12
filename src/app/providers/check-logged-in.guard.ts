import { inject } from '@angular/core';
import type { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

import { UserService } from './user.service';

export const checkLoggedInGuard: CanActivateFn = async () => {
  const router = inject(Router);
  const user = inject(UserService);

  // The login is saved in Preferences, so this also works when the page is loaded directly
  if (await user.isLoggedIn()) {
    return true;
  }

  return router.parseUrl('/login');
};
