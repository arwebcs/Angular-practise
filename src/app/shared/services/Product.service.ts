import { Injectable } from '@angular/core';
import { Product } from '../models/Products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [];

  addProduct(data: Product) {
    this.products.push(data);
  }
  getProduct() {
    return this.products;
  }
}
