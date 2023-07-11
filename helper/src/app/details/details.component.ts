import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Task, tasks} from '../tasks'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  item: Task | undefined;

  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const itemIdFromRoute = Number(routeParams.get('itemId'));
  
    // Find the product that correspond with the id provided in route.
    this.item = tasks.find(item => item.id === itemIdFromRoute);
  }

}
