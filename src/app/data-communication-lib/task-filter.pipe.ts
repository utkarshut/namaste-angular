import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './model/app.model';

@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {

  transform(value: Task[], ...args: any[]): Task[] {
    if(args[0]){
      return value.filter(f=>f.STATUS ==="COMPLETED")
    }
    return value.filter(f=>f.STATUS !=="COMPLETED");
  }

}
