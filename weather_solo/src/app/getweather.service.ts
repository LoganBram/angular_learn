import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetweatherService {
  public WeatheObj: any;

  constructor(private http: HttpClient) {}

  public getCurrentWeather(){
    this
  }
}
