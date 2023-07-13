import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {forecast, Forecast} from '../forecast'

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit{
  

  forecast = forecast
  public searchInput: String = ''
  public searchResult: Array<any>=[];
  public currentcity: Forecast = {
    date: '',
    temp: 0,
    feelslike: 0,
    sky: '',
    location: ''
  }
  
  public selectedInput: any = {};

  locationChange(city: Forecast){
    this.currentcity = city
  }
   

   fetchSeries(event: any) {
    if (event.target.value === '') {
      this.searchResult = [];
      return this.searchResult;
    }
    
    this.searchResult = this.forecast.filter((cities) => {
      return cities.location.toLowerCase().startsWith(event.target.value.toLowerCase());
    });
  
    return this.searchResult; // Add this line to return the filtered search result
  }

  




  ngOnInit(){
      
  }

}
