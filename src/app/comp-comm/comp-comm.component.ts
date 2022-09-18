import { Component, OnInit } from '@angular/core';
import { Product } from './Product.model';

@Component({
  selector: 'app-comp-comm',
  templateUrl: './comp-comm.component.html',
  styleUrls: ['./comp-comm.component.css'],
})
export class CompCommComponent implements OnInit {
  listproducts: Product[] = [];
  constructor() {}
  getProduct(data: Product) {
    this.listproducts.push(data);
    console.log(this.listproducts);
  }
  ngOnInit(): void {}
}
