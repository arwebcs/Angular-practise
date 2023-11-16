import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private loginService: UserService, private router: Router) {
    localStorage.clear();
  }
  myForm!: FormGroup;

  statusCode: number = 0;
  userNameErr: string = '';
  passwordErr: string = '';
  loginErr: string = '';
  isLoading: boolean = false;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }
  login() {
    this.isLoading = true;
    this.loginService.login(this.myForm.value).subscribe(
      (result) => {
        this.isLoading = false;
        localStorage.setItem('username', result.data.username);
        localStorage.setItem('name', result.data.name);
        this.router.navigate(['home']);
      },
      (err: HttpErrorResponse): void => {
        console.log(err);
        this.isLoading = false;
        this.statusCode = err.error.statusCode;
        if (this.statusCode == 500) {
          this.loginErr = err.error.message;
        } else {
          console.log(err.error);
          this.userNameErr = err.error.errors?.username;
          this.passwordErr = err.error.errors?.password;
          this.loginErr = err.error.error;
        }
      }
    );
  }
}
