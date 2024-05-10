import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { login } from '../store/action';
import { Observable } from 'rxjs';
import { selectUser } from '../store/selector';
import { DataserviceService } from '../services/dataservice.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss'],
})
export class LoginComponentComponent {
  public name: any;
  public password: any;
  public user$: Observable<any>; // Define an Observable to hold the user

  constructor(
    private store: Store<any>,
    private dataService: DataserviceService,
    private authService: AuthService,
    private router: Router
  ) {
    this.user$ = this.store.pipe(select('userState')); // Select the 'user' property from the 'login' slice of the state
    this.user$.subscribe({
      next: (d) => console.log(d),
      error: (e) => console.log(e),
    });
  }
  public onSubmit() {
    console.log('onSubmit', this.name, this.password);
    this.authService.login(this.name, this.password).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(["/home"]);
      },
      error: (err) => console.log(err),
    });
    this.store.dispatch(login({ user: this.name, password: this.password }));
  }
}
