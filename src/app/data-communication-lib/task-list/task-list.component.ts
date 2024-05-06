import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Task } from '../model/app.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['addedTask'] && changes['addedTask'].currentValue.length > 0) {
    //   this.addedTask = [];
    // }
  }

  @Input()
  public set addedTask(task: any) {
    if(task){
      this.tasks.unshift({ ...task, CHECKED: false, DELETE: false });
      const data = JSON.parse(JSON.stringify(this.tasks));
      this.tasks = [];
      this.tasks = data;
      console.log(this.tasks);
    }
  }
  @Input() public showCompleted: boolean = false;
  public tasks: any[] = [
    {
      CHECKED: false,
      TITLE: 'Reading',
      STATUS: 'IN PROGRESS',
      DELETE: false,
    },
    {
      CHECKED: true,
      TITLE: 'Writing',
      STATUS: 'COMPLETED',
      DELETE: false,
    },
    {
      CHECKED: false,
      TITLE: 'Speaking',
      STATUS: 'NOT STARTED',
      DELETE: true,
    },
    {
      CHECKED: false,
      TITLE: 'Dancing',
      STATUS: 'IN PROGRESS',
      DELETE: false,
    },
    {
      CHECKED: false,
      TITLE: 'Singing',
      STATUS: 'IN PROGRESS',
      DELETE: false,
    },
  ];
  public deleteTask(event: any){
    console.log(event)
    const task = event;
    this.tasks = this.tasks.filter((f:any)=>f.TITLE !== task.TITLE ||
    f.STATUS !== task.STATUS ||
    f.DELETE !== task.DELETE 
  )
  }
}
