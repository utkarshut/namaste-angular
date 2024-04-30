import { Component, Input } from '@angular/core';
import { Task } from '../model/app.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
 @Input() public task:any;
 @Input() public status:any;
}
