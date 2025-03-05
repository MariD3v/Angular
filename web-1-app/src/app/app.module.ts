import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductosComponent } from './paginas/productos/productos.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { SobrenosotrosComponent } from './paginas/sobrenosotros/sobrenosotros.component';
import { HttpClientModule } from '@angular/common/http';
import { DetalleProductoComponent } from './paginas/detalle-producto/detalle-producto.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    InicioComponent,
    SobrenosotrosComponent,
    DetalleProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
