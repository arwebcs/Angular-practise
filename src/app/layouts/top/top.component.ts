import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../../shared/services/login-service.service';
@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginServiceService) { }

  isLoggedIn: boolean = false;

  logout() {
    alert("Logged out");
    this.router.navigate(['']);
    return localStorage.removeItem("userToken");
  }

  ngOnInit(): void {
    if (this.loginService.isLoggedIn()) {
      this.isLoggedIn = true;
    }
  }

}
