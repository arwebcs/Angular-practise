import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentCommunicationRoutingModule } from './component-communication-routing.module';
import { ComponentCommunicationComponent } from './component-communication.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { CompInputComponent } from './comp-input/comp-input.component';
import { CompOutputComponent } from './comp-output/comp-output.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ComponentCommunicationComponent,
    CompInputComponent,
    CompOutputComponent
  ],
  imports: [
    CommonModule,
    ComponentCommunicationRoutingModule,
    LayoutsModule,
    FormsModule
  ]
})
export class ComponentCommunicationModule { }
