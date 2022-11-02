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
import { GoodsComponent } from './goods/goods.component';
import { GoodsEntryComponent } from './goods/goods-entry/goods-entry.component';
import { GoodsShowComponent } from './goods/goods-show/goods-show.component';
import { PipesComponent } from './pipes/pipes.component';
import { Customise } from './pipes/customise.pipe';
import { Filtering } from './pipes/filtering.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BindingDirectives,
    Greetings,
    TwoWayBindingComponent,
    CompCommComponent,
    ProductEntryComponent,
    ProductListComponent,
    GoodsComponent,
    GoodsEntryComponent,
    GoodsShowComponent,
    PipesComponent,
    Customise,
    Filtering
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
