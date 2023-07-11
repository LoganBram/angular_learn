import { Component } from '@angular/core';

import {tasks, Task} from '../tasks';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

    tasks = [...tasks]
    filter: "all" | "active" | "done" = "all";

    get obtainTasks(){
      if (this.filter === "all"){
        return this.tasks
      }
      return this.tasks.filter((task)=> !task.done
      )
    }


    

    onDelete(task: Task){
      this.tasks.splice(this.tasks.indexOf(task), 1)
    }


}
