import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MachineCodingLibRoutingModule } from './machine-coding-lib-routing.module';
import { MachineCodingLibComponent } from './machine-coding-lib.component';
import { GoogleLikeSearchTypeAheadComponent } from './google-like-search-type-ahead/google-like-search-type-ahead.component';
import { DataProviderService } from './data-provider.service';


@NgModule({
  declarations: [
    MachineCodingLibComponent,
    GoogleLikeSearchTypeAheadComponent
  ],
  imports: [
    CommonModule,
    MachineCodingLibRoutingModule,
    HttpClientModule
  ],
  providers:[DataProviderService]
})
export class MachineCodingLibModule { }
