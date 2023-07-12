import { Component } from '@angular/core';
import { forecast, Forecast } from '../forecast'

@Component({
  selector: 'app-weatherapp',
  templateUrl: './weatherapp.component.html',
  styleUrls: ['./weatherapp.component.css']
})
export class WeatherappComponent {
  location = "Vancouver"

  forecasts = [
    {
        date: "2023-07-12",
        temp: 25,
        feelslike: 28,
        sky: "Sunny",
        location: "New York"
    },
    {
        date: "2023-07-13",
        temp: 22,
        feelslike: 25,
        sky: "Partly Cloudy",
        location: "Vancouver"
    },
]

  onEnter(input: string){
    this.location = input
  }

  

}
