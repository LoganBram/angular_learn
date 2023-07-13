import { Component, OnInit } from '@angular/core';
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
  
  public selectedInput: any = {};

   

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

  handleChosen(city: Forecast){

  }




  ngOnInit(){
      
  }

}
