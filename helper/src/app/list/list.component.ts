import { Component } from '@angular/core';

import {tasks, Task} from '../tasks';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

    tasks = [...tasks]

    onDelete(task: Task){
      this.tasks.splice(this.tasks.indexOf(task), 1)
    }


}
