import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre      : string = 'Francisco';
  nombre2     : string = 'FrAnCisCo SOtO DoMiNGueZ'
  arreglo              = [1,2,3,4,5,6,7,8,9,10];
  PI          : number = Math.PI;
  porcentaje  : number = 0.234;
  salario     : number = 1234.5;
  fecha       : Date   = new Date()

  contrasena  : string = 'mipassword';
  activar     : boolean = true;
  
  idioma      : string = 'es';
  videoUrl    : string = 'https://www.youtube.com/embed/Bz5BhH7K9pA';

  valorPromoesa = new Promise<string>( (resolve) => {

    setTimeout( () => {
      resolve('Llegó la data...');
    }, 4500);
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Manantiales',
      casa: 20
    }
  }

}
