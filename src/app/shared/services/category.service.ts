import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categoryDesc: string = '';
  categoryImage: string = '';
  constructor() {}

  getCategories() {
    const item = [
      { CategoryId: 1, CategoryName: 'Nokia' },
      { CategoryId: 2, CategoryName: 'Samsung' },
      { CategoryId: 3, CategoryName: 'Iphone' },
      { CategoryId: 4, CategoryName: 'Moto' },
      { CategoryId: 5, CategoryName: 'RealMe' },
    ];
    return item;
  }

  getCategoryDesc(categoryId: number) {
    if (categoryId == 1) {
      this.categoryDesc = 'Nokia 1120';
      this.categoryImage =
        'https://cdn.shopclues.com/images1/thumbnails/113512/320/320/152124217-113512866-1616842135.jpg';
    } else if (categoryId == 2) {
      this.categoryDesc = 'Samsung Galaxy';
      this.categoryImage =
        'https://cdn.shopclues.com/images1/thumbnails/116413/320/320/153091677-116413456-1657173647.jpg';
    } else if (categoryId == 3) {
      this.categoryDesc = 'IPhone13';
      this.categoryImage =
        'https://images-eu.ssl-images-amazon.com/images/I/31SOygUjpUL._SY445_SX342_QL70_FMwebp_.jpg';
    } else if (categoryId == 4) {
      this.categoryDesc = 'Moto g6Plus';
      this.categoryImage =
        'https://m.media-amazon.com/images/I/71UPGHXG9zL._SY741_.jpg';
    } else {
      this.categoryDesc = 'Realme';
      this.categoryImage =
        'https://cdn.shopclues.com/images1/thumbnails/116443/320/320/153100699-116443227-1658747836.jpg';
    }
    return [
      {
        categoryid: categoryId,
        categorydesc: this.categoryDesc,
        categoryImg: this.categoryImage,
      },
    ];
  }
}
