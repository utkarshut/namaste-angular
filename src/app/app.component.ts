import { Component, OnInit } from '@angular/core';
import { DataserviceService } from './services/dataservice.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = '--Angular--';
  public dataFromChildComponent: string = '';
  private userProfile$!: Observable<any>;

  constructor(
    private _dataService: DataserviceService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userProfile$ = this.authService.getProfile();
    this.userProfile$.subscribe({
      next: (d) => {
        console.log(d);
        if (!d.user) {
          this.router.navigate(['/login']);
        }
      },
      error: (e) => {
        console.log(e);
        this.router.navigate(['/login']);
      },
    });
    //this.router.navigateByUrl("/toDoList")
    this._dataService.childInputSubject.subscribe((value: any) => {
      this.dataFromChildComponent = value;
    });
  }
}
