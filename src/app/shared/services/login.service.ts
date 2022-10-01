import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() { }
  login: boolean = false;

  makeLogin() {
    this.login = true;
    return this.login;
  }
  makeLogout() {
    this.login = false;
    return this.login;
  }
  checkLoggedin() {
    const promise = new Promise((resolve, reject) => {
      resolve(this.login);
    });
    return promise;
  }
  isLoggedIn() {
    return this.checkLoggedin().then((res: any) => {
      if (res == true) {
        return true;
      } else {
        alert("Please login first")
        return false;
      }
    });
  }
}
