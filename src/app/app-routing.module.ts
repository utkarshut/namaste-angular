import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"login",
    component: LoginComponentComponent
  },
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"home",
    component: HomeComponent
  },
  {
    path: 'toDoList',
    loadChildren: () =>
      import('./data-communication-lib/data-communication-lib.module').then(
        (m) => m.FormsLibModule
      ),
  },
  { path: 'lifeCycleHooks', loadChildren: () => import('./life-cycle-hook-lib/life-cycle-hook-lib.module').then(m => m.LifeCycleHookLibModule) },
  { path: 'machineCodeLib', loadChildren: () => import('./machine-coding-lib/machine-coding-lib.module').then(m => m.MachineCodingLibModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
