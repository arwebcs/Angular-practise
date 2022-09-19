import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css'],
})
export class GoodsComponent implements OnInit {
  goodName: string = '';
  constructor() {}
  getName(data: any) {
    this.goodName = data;
  }
  ngOnInit(): void {}
}
