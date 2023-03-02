import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import {ListModuleModule} from './modules/lists/list-module.module';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component'
import {HttpClientModule}  from '@angular/common/http';
import { LoginFormComponent } from './components/fomrs/login-form/login-form.component'
@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ListaContactosComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // Importamos nuestro modulo personalizado
    ListModuleModule,
    // Importamos el modulo HttpClientModule para hacer peticiones HTTP
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
