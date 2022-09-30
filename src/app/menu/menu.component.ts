import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  login() {
    this.loginService.isLoggedin().then((res) => {
      console.log(res);
    });
    return this.loginService.isLoggedin();
  }
}
