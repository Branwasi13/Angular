import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HolaMundo';
  usuario = "Brandon";

  // esta funcion se ejecutara cuando el hijo (saludo component) se pulse

  recibirMensajeDelHijo(evento: string){
    alert(evento)
  }
}
