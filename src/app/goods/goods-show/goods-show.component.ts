import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-goods-show',
  templateUrl: './goods-show.component.html',
  styleUrls: ['./goods-show.component.css'],
})
export class GoodsShowComponent implements OnInit {
  @Input() goodsNameSpecial: string = '';
  constructor() {}

  ngOnInit(): void {}
}
