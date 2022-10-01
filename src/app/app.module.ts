import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LoginGuard } from './shared/guards/login.guard';
import { TdFormsComponent } from './td-forms/td-forms.component';

const route: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'tdforms',
    component: TdFormsComponent,
    canActivate: [LoginGuard],
  },
];

@NgModule({
  declarations: [AppComponent, HomeComponent, MenuComponent, TdFormsComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(route)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
