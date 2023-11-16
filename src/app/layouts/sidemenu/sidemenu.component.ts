import { Component } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent {
  collapse() {
    var elm: any = document.getElementById('main-wrapper');
    elm.classList.remove('show-sidebar');
  }
}
