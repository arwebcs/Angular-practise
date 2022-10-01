import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  loggedIn: boolean = false;
  constructor(private loginService: LoginService, private router: Router) { }
  login() {
    this.loggedIn = this.loginService.makeLogin();
    alert("Logged in");
    return this.loggedIn;
  }
  logout() {
    this.loggedIn = this.loginService.makeLogout();
    this.router.navigate(['']);
    alert("Logged out");
    return this.loggedIn;
  }

  ngOnInit(): void {
    this.loggedIn;
  }
}
