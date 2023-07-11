import { Component,Input, Output } from '@angular/core';

@Component({
  selector: 'app-currweather',
  templateUrl: './currweather.component.html',
  styleUrls: ['./currweather.component.css']
})
export class CurrweatherComponent {
  @Input() location!: string;
}
