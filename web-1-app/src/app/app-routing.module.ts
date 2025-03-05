import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { SobrenosotrosComponent } from './paginas/sobrenosotros/sobrenosotros.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { DetalleProductoComponent } from './paginas/detalle-producto/detalle-producto.component';

const routes: Routes = [
  {path: '',component: InicioComponent},
  {path: 'nosotros',component: SobrenosotrosComponent},
  {path: 'productos',component: ProductosComponent},
  {path: 'productos/:id',component: DetalleProductoComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
