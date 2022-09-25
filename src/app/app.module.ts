import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductEntryComponent } from './products/product-entry/product-entry.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { CategoryComponent } from './category/category.component';
import { CategorySideBarComponent } from './category/category-side-bar/category-side-bar.component';
import { CategoryDescriptionComponent } from './category/category-description/category-description.component';

const route: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'product',
    component: ProductsComponent,
  },
  {
    path: 'employee',
    component: EmployeeComponent,
  },
  {
    path: 'employee/:employeeid',
    component: EmployeeComponent,
  },
  {
    path: 'category',
    component: CategoryComponent,
    children: [
      {
        path: ':categoryid',
        component: CategoryDescriptionComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ProductsComponent,
    ProductEntryComponent,
    ProductListComponent,
    EmployeeComponent,
    CategoryComponent,
    CategorySideBarComponent,
    CategoryDescriptionComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(route)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
