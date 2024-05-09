import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MachineCodingLibComponent } from './machine-coding-lib.component';
import { GoogleLikeSearchTypeAheadComponent } from './google-like-search-type-ahead/google-like-search-type-ahead.component';

const routes: Routes = [
  {
    path: '',
    component: MachineCodingLibComponent,
    children: [
      { path: 'googleSearch', component: GoogleLikeSearchTypeAheadComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineCodingLibRoutingModule {}
