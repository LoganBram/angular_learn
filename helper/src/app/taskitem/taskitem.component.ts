import { Component, Input, EventEmitter, Output } from '@angular/core';
import {Task, tasks} from '../tasks'

@Component({
  selector: 'app-taskitem',
  templateUrl: './taskitem.component.html',
  styleUrls: ['./taskitem.component.css']
})
export class TaskitemComponent {
  @Input() item!: Task
  @Output() delete = new EventEmitter<Task>()
  @Output() add = new EventEmitter<Task>()
  //each item has access to their own editable variable
  editable = false

  onCheck(item: Task){
    item.done = !item.done
    return item
  }


  onEdit(name: string){
    if (!name) return;
    this.item.name = name
    this.editable = false;
  }





  


}
