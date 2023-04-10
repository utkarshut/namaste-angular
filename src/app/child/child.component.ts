import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit, OnChanges {
  public childInputValueUsingSubject: string = '';
  public _inputValueFromParent: string = '';
  // Value or function can be trigger by change in input property
  @Input() set inputValueFromParent(value: string) {
    this._inputValueFromParent = value;
  }

  // @Output('ngModelChange') update = new EventEmitter();

  constructor(private _dataService: DataserviceService) {}

  ngOnInit() {
    this._dataService.childInputSubject.subscribe((value) => {
      this.childInputValueUsingSubject = value;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // It detects only input property attributes
    console.log(this._inputValueFromParent);
  }

  public onChangeInput(e: any) {
    this._dataService.childInputSubject.next(e.target.value);
  }
}
