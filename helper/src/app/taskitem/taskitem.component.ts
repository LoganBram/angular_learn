import { Component, Input, EventEmitter, Output } from '@angular/core';
import {Task} from '../tasks'

@Component({
  selector: 'app-taskitem',
  templateUrl: './taskitem.component.html',
  styleUrls: ['./taskitem.component.css']
})
export class TaskitemComponent {
  @Input() item!: Task
  @Output() delete = new EventEmitter<Task>()

  editable = false

  onCheck(item: Task){
    item.done = !item.done
    return item
  }

  onEditable(){
    this.editable = !this.editable
    return this.editable
  }

  


}
