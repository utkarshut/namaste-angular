import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataCommunicationLibComponent } from './data-communication-lib.component';

const routes: Routes = [{ path: '', component: DataCommunicationLibComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataCommunicationLibRoutingModule { }
