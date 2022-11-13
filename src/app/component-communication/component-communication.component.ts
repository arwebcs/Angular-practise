import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../shared/models/Product.model';

@Component({
  selector: 'app-component-communication',
  templateUrl: './component-communication.component.html',
  styleUrls: ['./component-communication.component.css']
})
export class ComponentCommunicationComponent implements OnInit, AfterViewInit {


  constructor() { }
  listproducts: Product[] = [];
  @ViewChild('headerName') headName = {} as ElementRef;


  getProduct(data: Product) {
    this.listproducts.push(data);
  }

  ngOnInit(): void { }
  ngAfterViewInit() {
    this.headName.nativeElement.innerHTML = "Component communication";
  }
}
