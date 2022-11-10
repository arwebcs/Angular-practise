import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';
import { EntryComponent } from './entry/entry.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent
  },
  {
    path: 'entry',
    component: EntryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
