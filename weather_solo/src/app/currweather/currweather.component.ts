import { Component,Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { forecast, Forecast } from '../forecast'
import { GetweatherService } from '../getweather.service';





@Component({
  selector: 'app-currweather',
  templateUrl: './currweather.component.html',
  styleUrls: ['./currweather.component.css']
})
export class CurrweatherComponent{

  @Input() city!: Forecast

  constructor(private APIservice: GetweatherService){}

  get getWeather(){
    return this.APIservice.getCurrentWeather();
  }
  

}
