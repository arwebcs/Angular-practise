import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[myOwnDirective]'
})
export class OwnDirectiveDirective {

  constructor(e: ElementRef) {
    console.log(e);
    e.nativeElement.innerHTML = 'Hello ';
  }

}
