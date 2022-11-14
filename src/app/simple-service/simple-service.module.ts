import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleServiceRoutingModule } from './simple-service-routing.module';
import { SimpleServiceComponent } from './simple-service.component';
import { LayoutsModule } from '../layouts/layouts.module';


@NgModule({
  declarations: [
    SimpleServiceComponent
  ],
  imports: [
    CommonModule,
    SimpleServiceRoutingModule,
    LayoutsModule
  ]
})
export class SimpleServiceModule { }
