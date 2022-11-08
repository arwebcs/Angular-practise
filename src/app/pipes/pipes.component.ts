import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})

export class PipesComponent implements OnInit {

  constructor() { }

  pipePage: string = "Pipes";

  pipeName = "Soumyanjan Dey";
  dateExample = Date.now();
  jsonEx = { "username": "arweb", "title": "Company" };
  currencyEx = 111;
  percentEx = 0.689156;

  status_on = new Promise((resolve, reject) => {
    setTimeout(() => { return resolve("active"); }, 2000);
  });

  filterText: string = "";
  users = [
    { name: 'raj', age: 12 },
    { name: 'suman', age: 52 },
    { name: 'rita', age: 15 },
  ];



  ngOnInit(): void {
  }

}
