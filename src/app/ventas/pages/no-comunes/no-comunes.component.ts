import { Component} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  //i18nselect
  nombre:string='Susana';
  genero:string='femenino';

  invitacionMapa={
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }

  //i18nPlural
  clientes:string[]=['Maria','Pedro','Juan','Fernando','Alejandro'];

  clientesMap={
    '=0':'No tenemos ningún cliente esperando',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos dos clientes esperando',
    'other':'tenemos # clientes esperando'
  }

  cambiarPersona(){
    this.nombre='Wilmer';
    this.genero='masculino';
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //keyvalue Pipe
  persona={
    nombre:'Wilmer',
    edad:24,
    direccion:'Bogota, Colombia'
  }

  //Json Pipe
  heroes=[
    {
      nombre:'Superman',
      vuela:true
    },
    {
      nombre:'Robin',
      vuela:false
    },
    {
      nombre:'Aquaman',
      vuela:false
    }
  ];

  //Async pipe

  miObservable=interval(5000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos data de promesa')
    }, 3500);
  })








}
