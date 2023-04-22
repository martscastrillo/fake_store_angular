import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
//estas variables deben tener un acceso publico
export class AppComponent {
  widthImg = 10;
  name = 'Marta';
  age = 32;
  img =
    'https://s1.ppllstatics.com/lasprovincias/www/multimedia/202112/12/media/cortadas/gatos-kb2-U160232243326NVC-624x385@Las%20Provincias.jpg';
  btnDisable = true;
  register = {
    name: '',
    email: '',
    password: ''
  }
  person = {
    name: 'Marta',
    age: 32,
    avatar:
      'https://s1.ppllstatics.com/lasprovincias/www/multimedia/202112/12/media/cortadas/gatos-kb2-U160232243326NVC-624x385@Las%20Provincias.jpg',
  };
  names: string[] = ['Laura', 'Moni', 'Ale'];
  newName = '';
  box = {
    width: 100,
    height: 100,
    background: 'red',
  };
  products : Product[] = [
    {
      name: 'NIKON D780 + 24-120/4 G VR ED',
      price: 1.565,
      image: './assets/images/camera0.jpg',
      category: 'all',
    },
    {
      name: 'EL mejor juguete',
      price: 865,
      image: './assets/images/camera1.jpg',
      category: 'all',
    },
    {
      name: 'FUJIFILM Mini Evo',
      price: 969,
      image: './assets/images/camera2.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 1.434,
      image: './assets/images/camera3.jpg'
    },
    {
      name: 'Mis libros',
      price: 923,
      image: './assets/images/camera4.jpg'
    },
    {
      name: 'Casa para perro',
      price: 1.334,
      image: './assets/images/camera5.jpg'
    },
    {
      name: 'Gafas',
      price: 1.434,
      image: './assets/images/camera6.jpg'
    }
  ];
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
  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }
  deleteName(index:number){
    this.names.splice(index, 1);
  }
  onRegister(){
    console.log(this.register);
  }
}
