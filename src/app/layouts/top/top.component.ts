import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
})
export class TopComponent {
  urlString: string = '';
  isHome: boolean = false;

  constructor(private back_location: Location, private router: Router) {
    this.urlString = this.router.url;
    this.isHome = this.urlString == '/home' ? true : false;
  }

  goBack(): void {
    this.back_location.back();
  }

  toggle() {
    var elm: any = document.getElementById('main-wrapper');
    elm.classList.add('show-sidebar');
  }

  logout() {
    this.router.navigate(['']);
  }
}
