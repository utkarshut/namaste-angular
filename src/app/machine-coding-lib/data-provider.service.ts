import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataProviderService {
  constructor(private http: HttpClient) {}

  getData(param: string): Observable<any> {
    return this.http.get(
      `https://www.google.com/complete/search?q=${param}&cp=5&client=gws-wiz&xssi=t&gs_pcrt=undefined&hl=en-IN&authuser=0&psi=OVw7ZpHnEtyk2roPxv6r0AE.1715166265632&dpr=2&pq=free%20api%20for%20keyword%20suggestion%20github`,
      { observe: 'response' }
    );
  }

  getDataForTrendingProduct(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const payload = {
      query: `query {
        bestsellers(
            priceFilter: { min: 10, max: 50000 }, ratingFilter: { min: 4 }) {
            name
            imageUrl
            rating
            reviews
            price
        }
    }`,
    };
    return this.http.post(`\graphQL`, payload,{headers});
  }
}
