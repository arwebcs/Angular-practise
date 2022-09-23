import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/Products.model';
import { ProductService } from 'src/app/shared/services/Product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProduct();
  }
}
