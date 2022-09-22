import { Component, OnInit } from '@angular/core';
import { SrvGoods } from 'src/app/services/goods.service';

@Component({
  selector: 'app-goods-entry',
  templateUrl: './goods-entry.component.html',
  styleUrls: ['./goods-entry.component.css'],
})
export class GoodsEntryComponent implements OnInit {
  constructor(private goodsService: SrvGoods) {}

  ngOnInit(): void {
    this.goodsService.addGoods('Test goods');
  }
}
