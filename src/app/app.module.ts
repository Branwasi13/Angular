import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import {ListModuleModule} from './modules/lists/list-module.module';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component'
@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ListaContactosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ListModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
