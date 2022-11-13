import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BindingDirectivesRoutingModule } from './binding-directives-routing.module';
import { BindingDirectivesComponent } from './binding-directives.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { OwnDirectiveDirective } from './own-directive.directive';


@NgModule({
  declarations: [
    BindingDirectivesComponent,
    OwnDirectiveDirective
  ],
  imports: [
    CommonModule,
    BindingDirectivesRoutingModule,
    LayoutsModule
  ]
})
export class BindingDirectivesModule { }
