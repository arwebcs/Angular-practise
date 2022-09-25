import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-category-description',
  templateUrl: './category-description.component.html',
  styleUrls: ['./category-description.component.css'],
})
export class CategoryDescriptionComponent
  implements OnInit, OnDestroy, DoCheck
{
  categoryID: number = 0;
  urlSubscribe!: Subscription;
  categoryDesc: {
    categoryid: number;
    categorydesc: string;
    categoryImg: string;
  }[] = [];
  categoryImage: string = '';
  categoryDescr: string = '';
  constructor(
    private categoryService: CategoryService,
    private activateRoute: ActivatedRoute
  ) {}

  ngDoCheck(): void {
    this.urlSubscribe = this.activateRoute.params.subscribe((res) => {
      this.categoryID = res['categoryid'];
    });
    this.categoryDesc = this.categoryService.getCategoryDesc(this.categoryID);
    for (let desc of this.categoryDesc) {
      this.categoryImage = desc.categoryImg;
      this.categoryDescr = desc.categorydesc;
    }
  }
  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.urlSubscribe.unsubscribe();
  }
}
