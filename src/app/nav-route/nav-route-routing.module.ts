import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavRouteComponent } from './nav-route.component';

const routes: Routes = [
  {
    path: '',
    component: NavRouteComponent
  },
  {
    path: ':navid',
    component: NavRouteComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavRouteRoutingModule { }
