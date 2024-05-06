import { Component, OnInit } from '@angular/core';
import { DataserviceService } from './dataservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = '--Angular--';
  public dataFromChildComponent:string = '';

  constructor(private _dataService: DataserviceService, private router: Router) {}

  ngOnInit() {
    //this.router.navigateByUrl("/toDoList")
   this._dataService.childInputSubject.subscribe((value)=>{
    this.dataFromChildComponent = value;
   })
  }
}
