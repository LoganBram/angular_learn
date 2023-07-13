import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WeatherappComponent } from './weatherapp/weatherapp.component';
import { CurrweatherComponent } from './currweather/currweather.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    WeatherappComponent,
    CurrweatherComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: WeatherappComponent},
      {path: 'location/:locationplace', component: CurrweatherComponent}
    ]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
