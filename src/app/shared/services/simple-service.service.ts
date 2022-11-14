import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleServiceService {

  constructor() { }
  myName: string = "";
  addName(name: string) {
    this.myName = name;
  }
  getName() {
    return this.myName;
  }
}
