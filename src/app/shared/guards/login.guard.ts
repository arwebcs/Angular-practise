import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const loginGuard: CanActivateFn = () => {
  const loginService: UserService = inject(UserService);
  const route: Router = inject(Router);

  let loggedIn: boolean = false;

  if (loginService.isLoggedIn()) {
    loggedIn = true;
  } else {
    route.navigate(['']);
    loggedIn = false;
  }
  return loggedIn;
};
