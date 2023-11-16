import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SearchPipe } from '../shared/pipes/search.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LayoutsModule } from '../layouts/layouts.module';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  declarations: [UserComponent, SearchPipe, AddUserComponent, EditUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    LayoutsModule,
    FormsModule,
  ],
})
export class UserModule {}
