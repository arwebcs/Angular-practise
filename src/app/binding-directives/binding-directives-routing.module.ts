import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingDirectivesComponent } from './binding-directives.component';

const routes: Routes = [{ path: '', component: BindingDirectivesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BindingDirectivesRoutingModule { }
