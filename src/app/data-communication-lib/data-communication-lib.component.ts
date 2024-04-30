import { Component } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-data-communication-lib',
  templateUrl: './data-communication-lib.component.html',
  styleUrls: ['./data-communication-lib.component.scss']
})
export class DataCommunicationLibComponent {
  public dataFromChildComponent:string = '';
  constructor(private _dataService: DataserviceService) {}

  ngOnInit() {
   this._dataService.childInputSubject.subscribe((value)=>{
    this.dataFromChildComponent = value;
   })
  }
}
