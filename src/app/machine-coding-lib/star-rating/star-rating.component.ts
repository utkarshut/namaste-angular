import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {
  @Input() maxStars: number = 5;
  @Input() rating: number = 0;
  public stars: any[] = new Array(this.maxStars);

  public rate(val:number){
    this.rating = val;
  }
}
