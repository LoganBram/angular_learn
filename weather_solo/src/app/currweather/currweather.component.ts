import { Component,Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { forecast, Forecast } from '../forecast'





@Component({
  selector: 'app-currweather',
  templateUrl: './currweather.component.html',
  styleUrls: ['./currweather.component.css']
})
export class CurrweatherComponent{
  
  @Input() weather!: Forecast;

  ngOnInit(){
    //take location and get weather 
  
  }

}
