import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { PipesComponent } from './pipes.component';
import { ShortTextPipe } from './customise/short-text.pipe';
import { LayoutsModule } from '../layouts/layouts.module';


@NgModule({
  declarations: [
    PipesComponent,
    ShortTextPipe
  ],
  imports: [
    CommonModule,
    PipesRoutingModule,
    LayoutsModule
  ]
})
export class PipesModule { }
