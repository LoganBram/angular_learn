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
    this.http.get('https://api.openweathermap.org/data/3.0/onecall?lat=49&lon=123&exclude={part}&appid={myGlobals.apikey}')
  }

}
