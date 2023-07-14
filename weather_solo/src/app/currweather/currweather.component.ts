import { Component,Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { forecast, Forecast } from '../forecast'
import { GetweatherService } from '../getweather.service';
import { Observable, switchMap } from 'rxjs';





@Component({
  selector: 'app-currweather',
  templateUrl: './currweather.component.html',
  styleUrls: ['./currweather.component.css']
})

export class CurrweatherComponent implements OnInit {
  @Input() city!: any;
  locationObj: any;
  forecastObj: any;

  constructor(private APIservice: GetweatherService) {}

  getWeather(location: any) {
    return this.APIservice.getCurrentWeather(location);
  }

  getLocation() {
    return this.APIservice.getCurrentLocation();
  }

  ngOnInit() {
    // get location of current URL
    this.getLocation().subscribe((response) => {
      this.locationObj = response;
      
      // get weather of current location
      this.getWeather(this.locationObj).subscribe((weatherResponse) => {
        this.forecastObj = weatherResponse;
        console.log(this.forecastObj);
        // Do something with the weather data here
      });
    });
  }
}