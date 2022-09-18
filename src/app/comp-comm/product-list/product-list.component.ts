import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input('prod-alias') products: Product[] = [];

  constructor() {}

  ngOnInit(): void {}
}
