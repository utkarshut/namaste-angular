import { Injectable } from '@angular/core';
import { DataserviceService } from './dataservice.service';
import { Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _token:any;
  constructor(private dataService : DataserviceService) {}
  public isAuthenticated(): boolean {
    return !!this.getToken(); // Return true if token is present, false otherwise
  }
  public login(username: string, password: string) {
    return this.dataService.post('/login', { username: username, password:password }).pipe(
      tap((response: any) => {
        if (response && response.token) {
          this._token = response.token;
          localStorage.setItem("access_token", this._token);
          console.log(this._token);
        }
      })
    )
  }
  public getProfile():Observable<any>{
    return this.dataService.post('/profile',{})
  }
  public getToken(): string | null {
    const token = this._token !== undefined && this._token !== null ? this._token : localStorage.getItem("access_token");
    return token;
  }
  

  public logout() {
    // Remove token from cookie or local storage
    document.cookie = 'access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }
}
