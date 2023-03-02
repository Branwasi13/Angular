import { Injectable } from '@angular/core';



// importamos la lista de contactos MOCK
import { CONTACTOS } from '../mocks/contactos.mock';
import { IContacto } from '../models/contacto.interface';


@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }

  obtenerContactos(): IContacto[]{
    return CONTACTOS;
  }

  obtenerContactoPorID(id: number): IContacto | string{
    const contacto = CONTACTOS.find((contacto: IContacto) => contacto.id == id);

    if(contacto)
    return contacto;

    else
    return "No se encontro el contacto"
  }
}
