import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/Product.model';

@Component({
  selector: 'app-comp-output',
  templateUrl: './comp-output.component.html',
  styleUrls: ['./comp-output.component.css']
})
export class CompOutputComponent implements OnInit {

  constructor() { }
  @Input('prod-alias') products: Product[] = [];
  ngOnInit(): void {
  }

}
