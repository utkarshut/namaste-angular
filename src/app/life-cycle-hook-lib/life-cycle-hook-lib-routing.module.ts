import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifeCycleHookLibComponent } from './life-cycle-hook-lib.component';

const routes: Routes = [{ path: '', component: LifeCycleHookLibComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifeCycleHookLibRoutingModule { }
