import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ContadorComponent } from './componentes/contador/contador.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ContadorComponent
  ],
  imports:[
    BrowserModule,
    FormsModule
  ],
  providers:[],
  exports:[],
  bootstrap: [AppComponent]
})

export class AppModule { }