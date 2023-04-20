import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
//estas variables deben tener un
export class AppComponent {
  name = 'Marta';
  age = 32;
}