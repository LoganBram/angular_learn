import { Component } from '@angular/core';
import { forecast, Forecast } from '../forecast'

@Component({
  selector: 'app-weatherapp',
  templateUrl: './weatherapp.component.html',
  styleUrls: ['./weatherapp.component.css']
})
export class WeatherappComponent {
  locations = ['Vancouver', 'New York']
  location = 'Vancouver'

  

}
