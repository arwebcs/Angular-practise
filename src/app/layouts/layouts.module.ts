import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top/top.component';
import { BottomComponent } from './bottom/bottom.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    TopComponent,
    BottomComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TopComponent,
    BottomComponent,
    SidebarComponent
  ]
})
export class LayoutsModule { }
