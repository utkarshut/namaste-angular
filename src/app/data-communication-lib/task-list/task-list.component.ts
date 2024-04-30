import { Component, Input } from '@angular/core';
import { Task } from '../model/app.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  @Input() public showCompleted:boolean = false;
  public tasks:any[] = [
    {
      CHECKED: false,
      TITLE: "Reading",
      STATUS:"IN PROGRESS",
      DELETE: false
    },
    {
      CHECKED: true,
      TITLE: "Writing",
      STATUS:"COMPLETED",
      DELETE: false
    },
    {
      CHECKED: false,
      TITLE: "Speaking",
      STATUS:"NOT STARTED",
      DELETE: true
    },
    {
      CHECKED: false,
      TITLE: "Dancing",
      STATUS:"IN PROGRESS",
      DELETE: false
    },{
      CHECKED: false,
      TITLE: "Singing",
      STATUS:"IN PROGRESS",
      DELETE: false
    }
  ]
}
