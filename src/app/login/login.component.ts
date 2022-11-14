import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../shared/services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginServiceService, private router: Router) {
    localStorage.clear();
  }
  myForm!: FormGroup;

  statusCode: number = 0;
  userNameErr: string = '';
  passwordErr: string = '';
  loginErr: string = '';
  isLoginError: boolean = false;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      Username: new FormControl(''),
      Password: new FormControl(''),
    });
  }
  login() {
    console.log(this.myForm.value);
    this.loginService.login(this.myForm.value).subscribe(
      (result) => {
        this.statusCode = result.statusCode;
        if (this.statusCode == 200) {
          localStorage.setItem('userToken', result.data.Token);
          this.router.navigate(['student']);
        } else {
          this.userNameErr = result.error.Username;
          this.passwordErr = result.error.Password;
          this.loginErr = result.error.Login;
        }
      }
      // ,(err: HttpErrorResponse): void => {
      //   this.isLoginError = true;
      // }
    );
  }

}
