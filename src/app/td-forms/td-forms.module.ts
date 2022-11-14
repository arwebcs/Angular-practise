import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TdFormsRoutingModule } from './td-forms-routing.module';

import { TdFormsComponent } from './td-forms.component';
import { LayoutsModule } from '../layouts/layouts.module';


@NgModule({
  declarations: [
    TdFormsComponent
  ],
  imports: [
    CommonModule,
    TdFormsRoutingModule,
    FormsModule,
    LayoutsModule
  ]
})
export class TdFormsModule { }
