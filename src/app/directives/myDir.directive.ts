import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[myGreet]',
})
export class Greetings {
  constructor(e: ElementRef) {
    console.log(e);
    e.nativeElement.innerHTML = 'Hello ';
  }
}
