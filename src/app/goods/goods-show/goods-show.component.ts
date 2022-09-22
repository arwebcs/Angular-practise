import { Component, Input, OnInit } from '@angular/core';
import { SrvGoods } from 'src/app/services/goods.service';

@Component({
  selector: 'app-goods-show',
  templateUrl: './goods-show.component.html',
  styleUrls: ['./goods-show.component.css'],
})
export class GoodsShowComponent implements OnInit {
  // @Input() goodsNameSpecial: string = '';
  goodsNameSpecial: string = '';
  constructor(private goodsService: SrvGoods) {}

  ngOnInit(): void {
    this.goodsNameSpecial = this.goodsService.getGoods();
  }
}
