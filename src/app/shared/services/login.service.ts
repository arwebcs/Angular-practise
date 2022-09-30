import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}
  a: any = '';
  isLoggedin() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        this.a = 'string1';
      }, 10000);
      if (this.a == 'string1') {
        resolve(true);
      } else {
        resolve(false);
      }
    });
    return promise;
  }
}
