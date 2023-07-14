import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as myGlobals from './env'

@Injectable({
  providedIn: 'root'
})
export class GetweatherService {
  public WeatheObj: any;

  constructor(private http: HttpClient) {}

  public getCurrentWeather(locationObj: any){
    const latitude = locationObj.latitude;
    const longitude = locationObj.longitude;
    const apiKey = myGlobals.weather_apikey;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

    return this.http.get(url);

  }


  //api call for getting the current location of user
  public getCurrentLocation(){
    return this.http.get('https://api.ipgeolocation.io/ipgeo?apiKey=' + myGlobals.location_apikey)
  }

}
