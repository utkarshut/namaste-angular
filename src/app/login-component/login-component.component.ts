import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { login } from '../store/action';
import { Observable } from 'rxjs';
import { selectUser } from '../store/selector';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss'],
})
export class LoginComponentComponent {
  public name: any;
  public password: any;
  public user$: Observable<any>; // Define an Observable to hold the user

  constructor(private store: Store<any>) {
    this.user$ = this.store.pipe(select('userState')); // Select the 'user' property from the 'login' slice of the state
    this.user$.subscribe({
      next: (d) => console.log(d),
      error: (e) => console.log(e),
    });
  }
  public onSubmit() {
    console.log('onSubmit', this.name, this.password);
    this.store.dispatch(login({user:this.name, password: this.password}));
  }
}

