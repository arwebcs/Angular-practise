import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from 'src/app/shared/services/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private loginService: LoginServiceService, private router: Router) { }

  canActivate() {
    if (this.loginService.isLoggedIn()) {
      return true;
    } else {
      alert("Please login");
      this.router.navigate(['']);
      return false;
    }
  }
}
