import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'view',
    pathMatch: 'full',
  },
  {
    path: 'view',
    component: UserComponent,
    data: { title: 'CRUD::User view' },
  },
  {
    path: 'add',
    component: AddUserComponent,
    data: { title: 'CRUD::User add' },
  },
  {
    path: 'edit/:userID',
    component: EditUserComponent,
    data: { title: 'CRUD::User edit' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
