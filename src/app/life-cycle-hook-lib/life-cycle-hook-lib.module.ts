import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifeCycleHookLibRoutingModule } from './life-cycle-hook-lib-routing.module';
import { LifeCycleHookLibComponent } from './life-cycle-hook-lib.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [
    LifeCycleHookLibComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    LifeCycleHookLibRoutingModule,
    MatCardModule
  ]
})
export class LifeCycleHookLibModule { }
