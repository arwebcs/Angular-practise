import { Component, OnInit } from '@angular/core';
import { SimpleServiceService } from '../shared/services/simple-service.service';

@Component({
  selector: 'app-simple-service',
  templateUrl: './simple-service.component.html',
  styleUrls: ['./simple-service.component.css']
})
export class SimpleServiceComponent implements OnInit {

  constructor(private simpleService: SimpleServiceService) { }

  myName: string = "";

  ngOnInit(): void {
    this.simpleService.addName("Soumyanjan Dey");
    this.myName = this.simpleService.getName();
  }

}
