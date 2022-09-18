import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BindingDirectives } from './binding-directive/bd.component';
import { Greetings } from './directives/myDir.directive';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { CompCommComponent } from './comp-comm/comp-comm.component';
import { ProductEntryComponent } from './comp-comm/product-entry/product-entry.component';
import { ProductListComponent } from './comp-comm/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingDirectives,
    Greetings,
    TwoWayBindingComponent,
    CompCommComponent,
    ProductEntryComponent,
    ProductListComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
