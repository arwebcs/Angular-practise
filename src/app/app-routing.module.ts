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
    data: { title: 'Basic Angular with CRUD : Home' }
  },
  {
    path: 'binding-directives',
    loadChildren: () => import('./binding-directives/binding-directives.module').then(m => m.BindingDirectivesModule),
    data: { title: 'Basic Angular with CRUD : Binding directives' }
  },
  {
    path: 'pipes',
    loadChildren: () => import('./pipes/pipes.module').then(m => m.PipesModule),
    data: { title: 'Basic Angular with CRUD : Pipes' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
