import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavRouteRoutingModule } from './nav-route-routing.module';
import { NavRouteComponent } from './nav-route.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavRouteComponent
  ],
  imports: [
    CommonModule,
    NavRouteRoutingModule,
    RouterModule,
    LayoutsModule
  ]
})
export class NavRouteModule { }
