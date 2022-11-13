import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/shared/models/Product.model';

@Component({
  selector: 'app-comp-input',
  templateUrl: './comp-input.component.html',
  styleUrls: ['./comp-input.component.css']
})
export class CompInputComponent implements OnInit {

  constructor() { }
  pname = '';
  price = null;

  @Output() onProductAdded = new EventEmitter<Product>();
  addProduct() {
    const items = { ProductName: this.pname, ProductPrice: this.price };
    this.onProductAdded.emit(items);
    this.resetForm();
  }
  resetForm() {
    this.pname = '';
    this.price = null;
  }
  ngOnInit(): void {
  }

}
