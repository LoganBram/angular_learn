import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as myGlobals from './env'

@Injectable({
  providedIn: 'root'
})
export class GetweatherService {
  public WeatheObj: any;

  constructor(private http: HttpClient) {}

  public getCurrentWeather(){
    return this.http.get('https://api.openweathermap.org/data/3.0/onecall?lat=49&lon=123&appid=' + myGlobals.weather_apikey)
  }

  public getCurrentLocation(){
    return this.http.get('https://api.ipgeolocation.io/ipgeo?apiKey=' + myGlobals.location_apikey)
  }

}
