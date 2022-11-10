import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { MenuModule } from '../menu/menu.module';
import { EntryComponent } from './entry/entry.component';


@NgModule({
  declarations: [
    CategoryComponent,
    EntryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    MenuModule
  ]
})
export class CategoryModule { }
