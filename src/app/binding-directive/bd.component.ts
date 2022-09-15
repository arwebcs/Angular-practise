import { Component } from '@angular/core';

@Component({
  selector: 'app-bd',
  templateUrl: './bd.html',
})
export class BindingDirectives {
  myFirstString = 'String interpolation tutorial';
  type = 'text';
  showDiv = true;
  products = ['Mobile', 'Camera', 'IPod'];
  textColor = 'd';

  myFirstFunction() {
    return 'My first function';
  }
  changeInputType() {
    if (this.type === 'text') {
      this.type = 'checkbox';
    } else {
      this.type = 'text';
    }
  }
  toggleDiv() {
    this.showDiv = !this.showDiv;
  }
  eventHandle(event: Event) {
    console.log(event);
  }
}
