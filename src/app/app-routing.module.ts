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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
