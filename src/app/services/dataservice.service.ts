import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataserviceService {
  public childInputSubject = new Subject<string>();

  constructor(private http: HttpClient) {}

  post(url: string, payload: any): Observable<any> {
    return this.http.post('/api' + url, payload).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Handle 401 Unauthorized error (e.g., redirect to login page)
          console.log('Unauthorized');
          // You can also throw the error to propagate it further
          return throwError(error);
        } else {
          // For other errors, just forward the error
          return throwError(error);
        }
      })
    );
  }
  public logout(): Observable<any> {
    localStorage.setItem("access_token", "");
    document.cookie = 'access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    return this.http.post('/api/logout', {});
  }
}
