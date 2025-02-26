import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  public usuario: any ={
    nombre: "",
    email: ""
  }
  enviar(){
    


    this.usuario.nombre = "";
    this.usuario.email = "";
  }
}
