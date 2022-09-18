import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../Product.model';

@Component({
  selector: 'app-product-entry',
  templateUrl: './product-entry.component.html',
  styleUrls: ['./product-entry.component.css'],
})
export class ProductEntryComponent implements OnInit {
  pname = '';
  price = null;

  @Output() onProductAdded = new EventEmitter<Product>();
  constructor() {}
  addProduct() {
    const items = { ProductName: this.pname, ProductPrice: this.price };
    this.onProductAdded.emit(items);
    this.resetForm();
  }
  resetForm() {
    this.pname = '';
    this.price = null;
  }
  ngOnInit(): void {}
}
