import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { MenuComponent } from './menu/menu.component'
import { LoginGuard } from './shared/guards/login.guard'
import { TdFormsComponent } from './td-forms/td-forms.component'
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component'

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
  {
    path: 'reactiveforms',
    component: ReactiveFormsComponent,
    canActivate: [LoginGuard],
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    TdFormsComponent,
    ReactiveFormsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(route),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
