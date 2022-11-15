import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentEditComponent } from './student-edit/student-edit.component';


@NgModule({
  declarations: [
    StudentComponent,
    StudentEntryComponent,
    StudentEditComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    LayoutsModule
  ]
})
export class StudentModule { }
