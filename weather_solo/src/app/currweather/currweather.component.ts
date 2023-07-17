import { Component,Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { forecast, Forecast } from '../forecast'
import { GetweatherService } from '../getweather.service';
import { Observable, switchMap } from 'rxjs';
import { DatePipe } from '@angular/common';





@Component({
  selector: 'app-currweather',
  templateUrl: './currweather.component.html',
  styleUrls: ['./currweather.component.css']
})

export class CurrweatherComponent implements OnInit {
  @Input() city!: any;
  locationObj: any;
  forecastObj: any;
  icon: any;
  date: any = new Date();
  pipe = new DatePipe('en-US');

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
        //set icon value 
        this.icon  = "https://openweathermap.org/img/wn/" + this.forecastObj.weather[0].icon + ".png";
        console.log(this.forecastObj);
        console.log(this.locationObj)
      });
    });

    //get todays date and change format
    this.date = this.pipe.transform(this.date, 'yyyy-MM-dd');

    


  }
}