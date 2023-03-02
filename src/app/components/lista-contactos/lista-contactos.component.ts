import { Component,OnInit } from '@angular/core';
import { IContacto } from 'src/app/models/contacto.interface';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit{

  //Creamos una lista de contactos
  listaContactos:IContacto[] = [];


  //* inyectamos en el constructor el servicio de contactos
  constructor(private contactoService:ContactoService){}

  ngOnInit(): void {
    //obtenemos la lista de contactos que nos brinda el servicio 
    this.listaContactos = this.contactoService.obtenerContactos();
  }
}
