import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TdFormsComponent } from './td-forms.component';

const routes: Routes = [{ path: '', component: TdFormsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TdFormsRoutingModule { }
