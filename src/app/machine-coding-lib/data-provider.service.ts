import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataProviderService {
  constructor(private http: HttpClient) {}

  getData(param:string): Observable<any> {
    return this.http.get(`https://www.google.com/complete/search?q=${param}&cp=5&client=gws-wiz&xssi=t&gs_pcrt=undefined&hl=en-IN&authuser=0&psi=OVw7ZpHnEtyk2roPxv6r0AE.1715166265632&dpr=2&pq=free%20api%20for%20keyword%20suggestion%20github`);
  }
}
