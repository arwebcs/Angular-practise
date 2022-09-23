import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/Product.service';

@Component({
  selector: 'app-product-entry',
  templateUrl: './product-entry.component.html',
  styleUrls: ['./product-entry.component.css'],
})
export class ProductEntryComponent implements OnInit {
  pname: string = '';
  price: number | null = null;

  constructor(private productService: ProductService) {}
  addProduct() {
    this.productService.addProduct({
      ProductName: this.pname,
      ProductPrice: this.price,
    });
    this.resetForm();
  }
  resetForm() {
    this.pname = '';
    this.price = null;
  }

  ngOnInit(): void {}
}
