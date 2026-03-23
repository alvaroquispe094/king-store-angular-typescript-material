import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { StorageService } from '../common/storage.service';

export const authGuard: CanActivateFn = () => {
  const router: Router = inject(Router);
  const tokenStorage: StorageService = inject(StorageService);

  if (!tokenStorage.isLoggedIn()) {
    return router.createUrlTree(['/sign_in']);
  }

  const roles = ['ROLE_CUSTOMER', 'ROLE_ADMIN'] as Array<string>;
  const userRole = tokenStorage.getUser().roles[0] ?? '';

  return roles.includes(userRole) ? true : router.createUrlTree(['/sign_in']);
};
