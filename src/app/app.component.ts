import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
//estas variables deben tener un acceso publico
export class AppComponent {
  name = 'Marta';
  age = 32;
  img =
    'https://s1.ppllstatics.com/lasprovincias/www/multimedia/202112/12/media/cortadas/gatos-kb2-U160232243326NVC-624x385@Las%20Provincias.jpg';
  btnDisable = true;
  person = {
    name: 'Marta',
    age: 32,
    avatar:
      'https://s1.ppllstatics.com/lasprovincias/www/multimedia/202112/12/media/cortadas/gatos-kb2-U160232243326NVC-624x385@Las%20Provincias.jpg',
  };
  toggleButton() {
    this.btnDisable = !this.btnDisable;
  }
  ageIncrease(){
    this.person.age += 1;
  }
  onScroll(event : Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
    
  }
  changeName(event : Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
}
