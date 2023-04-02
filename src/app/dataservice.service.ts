import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  
  public childInputSubject = new Subject<string>();

  constructor() { }
}
