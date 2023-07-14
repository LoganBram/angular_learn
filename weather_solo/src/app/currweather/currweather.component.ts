import { Component,Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { forecast, Forecast } from '../forecast'
import { GetweatherService } from '../getweather.service';





@Component({
  selector: 'app-currweather',
  templateUrl: './currweather.component.html',
  styleUrls: ['./currweather.component.css']
})
export class CurrweatherComponent implements OnInit {
 

  @Input() city! : any

  location: any

  constructor(private APIservice: GetweatherService){}
  

  get getWeather(){
    return this.APIservice.getCurrentWeather();
  }

  get getLocation(){
    return this.APIservice.getCurrentLocation();
  }

  ngOnInit() {
    this.location = this.APIservice.getCurrentLocation().subscribe((response) => {
      console.log(response);
    },
  );
    
    
  }
  
  

}
