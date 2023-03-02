import { Component, OnInit, Input, Output, EventEmitter,OnDestroy, OnChanges,SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  @Input()
  nombre: string = "Anonimo";

  @Output()
  mensajeEmitter: EventEmitter<string> = new EventEmitter <string>();

  myStyle: object = {
    color:"blue",
    fontSize: '20px',
    fontWeight: "bold"
  }

  constructor(){}

  ngOnInit(): void {
    // instruccines previas a la renderizacion del componente
    console.log("ngOninit del componente salududo");
    
  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log("ngOnChanges el componente va a ser modificado (valor anterior)", changes['nombre'].previousValue);
    console.log("ngOnChanges el componente va a ser modificado (valor actual)", changes['nombre'].currentValue);
    
  }

  ngOnDestroy():void{
    console.log("ngOnDestroy el componente va a desaparecer");
  }

  /**
   * * Ejemplo para gestioner un evento de tipo click en el DOM y enviar un texto al padre
   */

  enviarMensajeAlPadre(): void{
    // alert(`hola, ${this.nombre}, Alerta despachada de un click`)
    this.mensajeEmitter.emit(`hola, ${this.nombre}, Alerta despachada de un click`);
  }
  


}


// Orden de ciclo de vida de los componentes
//* 1. ngOnChanges
//* 2. ngOninit
//* 3. ngAfterContentInit
//* 4. ngAfterContentChecked
//* 5. ngAfterViewInit
//* 6. ngAfterViewChecked
//* 7. ngAfterContentChecked
//* 8. ngAfterViewChecked
//* 9. ngOnDestroy