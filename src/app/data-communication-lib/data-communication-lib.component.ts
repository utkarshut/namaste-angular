import { Component } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-data-communication-lib',
  templateUrl: './data-communication-lib.component.html',
  styleUrls: ['./data-communication-lib.component.scss'],
})
export class DataCommunicationLibComponent {
  public dataFromChildComponent: string = '';
  public addedTask:any = null;
  constructor(private _dataService: DataserviceService) {}

  ngOnInit() {
    this._dataService.childInputSubject.subscribe((value) => {
      this.dataFromChildComponent = value;
    });
  }
  public show() {
    const dialog = document.getElementById(
      'myDialog'
    ) as HTMLDialogElement | null;
    if (dialog) {
      dialog.showModal();
    }
  }
  public close() {
    const dialog = document.getElementById(
      'myDialog'
    ) as HTMLDialogElement | null;
    if (dialog) {
      dialog.close();
    }
  }
  public createEmitEvent(event:any){
    console.log(event)
    this.addedTask = event;
  }
}
