import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MachineCodingLibRoutingModule } from './machine-coding-lib-routing.module';
import { MachineCodingLibComponent } from './machine-coding-lib.component';
import { GoogleLikeSearchTypeAheadComponent } from './google-like-search-type-ahead/google-like-search-type-ahead.component';
import { DataProviderService } from './data-provider.service';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { TrendingProductComponent } from './trending-product/trending-product.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    MachineCodingLibComponent,
    GoogleLikeSearchTypeAheadComponent,
    StarRatingComponent,
    TrendingProductComponent
  ],
  imports: [
    CommonModule,
    MachineCodingLibRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatTabsModule
  ],
  providers:[DataProviderService]
})
export class MachineCodingLibModule { }
