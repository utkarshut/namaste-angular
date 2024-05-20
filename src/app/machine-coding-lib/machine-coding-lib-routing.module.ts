import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MachineCodingLibComponent } from './machine-coding-lib.component';
import { GoogleLikeSearchTypeAheadComponent } from './google-like-search-type-ahead/google-like-search-type-ahead.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { TrendingProductComponent } from './trending-product/trending-product.component';

const routes: Routes = [
  {
    path: '',
    component: MachineCodingLibComponent,
    children: [
      { path: 'googleSearch', component: GoogleLikeSearchTypeAheadComponent },
      { path: 'starRating', component: StarRatingComponent },
      { path: 'trendingProduct', component: TrendingProductComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineCodingLibRoutingModule {}
