import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject, switchMap } from 'rxjs';
import { DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-google-like-search-type-ahead',
  templateUrl: './google-like-search-type-ahead.component.html',
  styleUrls: ['./google-like-search-type-ahead.component.scss'],
})
export class GoogleLikeSearchTypeAheadComponent implements OnInit {
  private searchTerms: any = new Subject<any[]>();
  public suggestionList$:any[] = [];
  constructor(private dataService: DataProviderService) {}
  ngOnInit() {
    this.searchTerms 
      .pipe(
        // wait 300ms after each keystroke before considering the term
        debounceTime(1000),
        // ignore new term if same as previous term
        distinctUntilChanged(),
        // switch to new search observable each time the term changes
        switchMap((term: any) => {
          console.log('Using RxJs Observable debounceTime :', term);
          return term;
        })
      )
      .subscribe((results: any[]) => {
        console.log(results);
        // handle search results
      });
  }
  public search(event: any) {
    console.log('Using Custom Function : ', event?.target?.value);
    this.dataService.getData(event?.target?.value).subscribe((data:any)=>{
      this.suggestionList$ = data?.body[0]?.map((m:any)=>m[0])
    });
    
  }
  public debounceFunction = this.betterSearch(this.search, 500);

  // public debounceFunction(event: any) {
  //   this.searchTerms.next(event?.target?.value);
  // }

  public betterSearch(searchFun: any, delay: number) {
    var timer: any;
    let context = this;
    return function (param: any) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        searchFun.apply(context,[param]);
      }, delay);
    };
  }
}
