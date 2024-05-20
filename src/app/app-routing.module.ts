import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/authGuard.service';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponentComponent,
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home',
        component: HomePageComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'toDoList',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./data-communication-lib/data-communication-lib.module').then(
            (m) => m.DataCommunicationLibModule
          ),
      },
      {
        path: 'lifeCycleHooks',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./life-cycle-hook-lib/life-cycle-hook-lib.module').then(
            (m) => m.LifeCycleHookLibModule
          ),
      },
      {
        path: 'machineCodeLib',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./machine-coding-lib/machine-coding-lib.module').then(
            (m) => m.MachineCodingLibModule
          ),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
