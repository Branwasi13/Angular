import { Component, OnInit } from '@angular/core';

export type Producto = {
  nombre: string;
  precio:number;
  description:string;
}

@Component({
  selector: 'app-lista-basica',
  templateUrl: './lista-basica.component.html',
  styleUrls: ['./lista-basica.component.css']
})
export class ListaBasicaComponent implements OnInit{

  cargando: boolean = true; 
  opcion: number = 0;
  listaElementos: Producto[] = [
    {
      nombre:"Leche",
      precio:13,
      description: "Leche entera"
    },
    {
      nombre:'Carne',
      precio: 20,
      description:"carde de cerdo"
    }
  ];

  constructor(){}

  ngOnInit(): void {
   
  }

  cambiarCargando(){
    this.cargando = !this.cargando;
  }

  escogerOpcion(opcionEscogida:number){
    this.opcion = opcionEscogida;
  }

}
