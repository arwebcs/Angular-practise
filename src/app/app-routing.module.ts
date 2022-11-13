import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: { title: 'Angular full package : Home' }
  },
  {
    path: 'binding-directives',
    loadChildren: () => import('./binding-directives/binding-directives.module').then(m => m.BindingDirectivesModule),
    data: { title: 'Angular full package : Binding directives' }
  },
  {
    path: 'pipes',
    loadChildren: () => import('./pipes/pipes.module').then(m => m.PipesModule),
    data: { title: 'Angular full package : Pipes' }
  },
  {
    path: 'two-way-binding',
    loadChildren: () => import('./two-way-binding/two-way-binding.module').then(m => m.TwoWayBindingModule),
    data: { title: 'Angular full package : Two way bindings' }
  },
  {
    path: 'component-communication',
    loadChildren: () => import('./component-communication/component-communication.module').then(m => m.ComponentCommunicationModule),
    data: { title: 'Angular full package : Component Communication' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
