import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SrvGoods {
  goods: string = '';

  addGoods(data: string) {
    this.goods = data;
  }

  getGoods() {
    return this.goods;
  }
}
