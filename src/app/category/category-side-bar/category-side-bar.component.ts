import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/shared/models/Category.model';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-category-side-bar',
  templateUrl: './category-side-bar.component.html',
  styleUrls: ['./category-side-bar.component.css'],
})
export class CategorySideBarComponent implements OnInit {
  items: CategoryModel[] = [];
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.items = this.categoryService.getCategories();
  }
}
