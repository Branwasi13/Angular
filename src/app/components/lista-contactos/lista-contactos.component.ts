import { Component,OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContacto } from 'src/app/models/contacto.interface';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit, OnDestroy{

  //Creamos una lista de contactos
  listaContactos:IContacto[] = [];
  contactoSeleccionado: IContacto | undefined;

  //* suscricion de Servicio
  subscription: Subscription | undefined;


  //* inyectamos en el constructor el servicio de contactos
  constructor(private contactoService:ContactoService){}

  ngOnInit(): void {
    //obtenemos la lista de contactos que nos brinda el servicio 
    this.contactoService.obtenerContactos()
    .then((lista: IContacto[]) => this.listaContactos = lista)
    .catch((error) => console.error(`ha ocurrido un error al recuperar la lista de contactos: ${error}`))
    .finally(() => console.log("Peticion de lista de contactos terminada"));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  obtenerContacto(id:number){
    // console.log(`obtener contacto ${id}`);
    this.subscription = this.contactoService.obtenerContactoPorID(id)
    ?.subscribe((contacto:IContacto) => this.contactoSeleccionado = contacto)
    
  }
}
