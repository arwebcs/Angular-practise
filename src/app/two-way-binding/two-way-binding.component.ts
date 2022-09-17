import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css'],
})
export class TwoWayBindingComponent implements OnInit {
  pname: string = '';
  price: number = 0;
  product: { ProductName: string; ProductPrice: string | number }[] = [];
  constructor() {}

  resetForm() {
    this.pname = '';
    this.price = 0;
  }

  addProduct() {
    const items = { ProductName: this.pname, ProductPrice: this.price };
    this.product.push(items);
    this.resetForm();
  }

  ngOnInit(): void {}
}
