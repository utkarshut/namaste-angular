import { Component } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-ng-model-change',
  templateUrl: './ng-model-change.component.html',
  styleUrls: ['./ng-model-change.component.scss'],
})
export class NgModelChangeComponent {
  public childInputValueUsingNgModelChange: string = '';
  constructor(private _dataService: DataserviceService){

  }
  /**
   * ngModelChange is angular change detection method for ngModel property
   * @param e
   */
  public onChangeInputByNgModel(e: any) {
    this.childInputValueUsingNgModelChange = e;
    this._dataService.childInputSubject.next(e);
  }
}
