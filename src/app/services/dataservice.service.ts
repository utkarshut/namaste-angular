import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataserviceService {
  public childInputSubject = new Subject<string>();

  constructor(private http: HttpClient) {}

  public post(url: string, payload: any): Observable<any> {
    return this.http.post('/api' + url, payload);
  }
}
