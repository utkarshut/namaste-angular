import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataCommunicationLibRoutingModule } from './data-communication-lib-routing.module';
import { DataCommunicationLibComponent } from './data-communication-lib.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFilterPipe } from './task-filter.pipe';
import { CreateTaskComponent } from './create-task/create-task.component';


@NgModule({
  declarations: [
    DataCommunicationLibComponent,
    TaskComponent,
    TaskListComponent,
    TaskFilterPipe,
    CreateTaskComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    DataCommunicationLibRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormsLibModule { }
