import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-directives',
  templateUrl: './binding-directives.component.html',
  styleUrls: ['./binding-directives.component.css']
})
export class BindingDirectivesComponent implements OnInit {

  constructor() { }

  myFirstString: string = 'String interpolation';
  myFirstFunction() {
    return 'My first function';
  }

  inputType: string = 'text';

  changeInputType() {
    if (this.inputType == "checkbox") {
      this.inputType = "text";
    } else {
      this.inputType = "checkbox";
    }
  }
  eventHandle(event: Event) {
    console.log(event);
  }

  showDiv: boolean = true;
  divToggle() {
    this.showDiv = !this.showDiv;
  }

  products: string[] = ["apple", "banana", "orange"];

  textColor = "red";
  className = "fontweight";
  ngOnInit(): void {
  }

}
