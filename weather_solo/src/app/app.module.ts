import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WeatherappComponent } from './weatherapp/weatherapp.component';
import { CurrweatherComponent } from './currweather/currweather.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherappComponent,
    CurrweatherComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: WeatherappComponent},
      {path: 'location/:locationplace', component: CurrweatherComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
