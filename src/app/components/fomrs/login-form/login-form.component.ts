import { Component } from '@angular/core';
import {OnInit} from '@angular/core'
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{


  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.authService.login('eve.holt@reqres.in', 'cityslicka').subscribe(
      (response) => {
        console.log("respuesta de login", response);
        if(response.token){
          sessionStorage.setItem("token", response.token);
        }
      
      },
      (error) => console.error(`ha ocurrido un error en el proceso de login: ${error}`),
      () => console.info(`se ha completadola llamada de login a reqres`)
      )
  }
}
