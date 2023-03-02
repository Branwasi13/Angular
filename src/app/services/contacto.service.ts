import { Injectable } from '@angular/core';



// importamos la lista de contactos MOCK
import { CONTACTOS } from '../mocks/contactos.mock';
import { IContacto } from '../models/contacto.interface';

// importamos observables de rxjs

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }

  obtenerContactos(): Promise<IContacto[]>{
    return Promise.resolve(CONTACTOS);
  }

  obtenerContactoPorID(id: number): Observable<IContacto> | undefined{
    const contacto = CONTACTOS.find((contacto: IContacto) => contacto.id == id);

    // creamos un observable

    let observable: Observable<IContacto> = new Observable(observer =>{
      observer.next(contacto); //*Emitir un valor a todo componente suscrito
      observer.complete() //*No emitimos mas valores
    });

    if(contacto)
    return observable;

    else
    return;
  }
}
