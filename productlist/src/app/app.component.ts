import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  share(){
    window.alert("hello")
  }

  onEdit(){
    window.alert("edit me")
  }

}
