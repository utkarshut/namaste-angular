import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-trending-product',
  templateUrl: './trending-product.component.html',
  styleUrls: ['./trending-product.component.scss']
})
export class TrendingProductComponent implements OnInit {
  public bestsellers: any[] = [];
  constructor(private dataProvider: DataProviderService){

  }
  ngOnInit(){
    this.dataProvider.getDataForTrendingProduct().subscribe({
      next:(response:any)=> this.bestsellers = response.data.bestsellers
    })
  }
}
