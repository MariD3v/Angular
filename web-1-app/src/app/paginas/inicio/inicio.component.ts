import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent {
  formulario: FormGroup;
  formInvalido: boolean = true;

  constructor(private f: FormBuilder){
    this.formulario = this.f.group({
      nombre: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      contraseña: ["", Validators.required]
    })

    this.formulario.valueChanges.subscribe(()=>{
      this.formInvalido = this.formulario.invalid;
    })
  }

  validar(controlName:string, tipoError:string){
    return this.formulario.get(controlName)?.hasError(tipoError) && this.formulario.get(controlName)?.touched
  }

  enviar(){
    console.log("Enviado")
  }
}
