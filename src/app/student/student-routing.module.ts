import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { StudentComponent } from './student.component';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent
  },
  {
    path: 'entry',
    component: StudentEntryComponent,
    data: { title: 'Angular full package : Student entry' }
  }, {
    path: 'edit/:studentID',
    component: StudentEditComponent,
    data: { title: 'Angular full package : Student edit' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
