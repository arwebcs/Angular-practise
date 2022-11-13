import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoWayBindingRoutingModule } from './two-way-binding-routing.module';
import { TwoWayBindingComponent } from './two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { LayoutsModule } from '../layouts/layouts.module';


@NgModule({
  declarations: [
    TwoWayBindingComponent
  ],
  imports: [
    CommonModule,
    TwoWayBindingRoutingModule,
    FormsModule,
    LayoutsModule
  ]
})
export class TwoWayBindingModule { }
