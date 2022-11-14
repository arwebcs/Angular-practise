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
  },
  {
    path: 'nav-route',
    loadChildren: () => import('./nav-route/nav-route.module').then(m => m.NavRouteModule),
    data: { title: 'Angular full package : Navigation' }
  },
  {
    path: 'simple-service',
    loadChildren: () => import('./simple-service/simple-service.module').then(m => m.SimpleServiceModule),
    data: { title: 'Angular full package : Simple service' }
  },
  {
    path: 'td-forms',
    loadChildren: () => import('./td-forms/td-forms.module').then(m => m.TdFormsModule),
    data: { title: 'Angular full package : Template driven forms' }
  },
  {
    path: 'reactive-forms',
    loadChildren: () => import('./reactive-form/reactive-form.module').then(m => m.ReactiveFormModule),
    data: { title: 'Angular full package : Reactive driven forms' }
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    data: { title: 'Angular full package : Login' }
  },
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule),
    data: { title: 'Angular full package : Student' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
