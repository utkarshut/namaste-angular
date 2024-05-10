import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
