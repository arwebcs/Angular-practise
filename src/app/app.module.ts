import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BindingDirectives } from './binding-directive/bd.component';
import { Greetings } from './directives/myDir.directive';

@NgModule({
  declarations: [AppComponent, BindingDirectives, Greetings],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
