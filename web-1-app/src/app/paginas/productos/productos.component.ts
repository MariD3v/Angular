import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';
import { IProducto } from 'src/app/modelos/iproducto.modelos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{

  listaProductos: IProducto[] = [];
  
  constructor(private _api: ApiService){
  }

  ngOnInit(): void {
    this._api.getProductos().subscribe((datos: IProducto[])=>{
      this.listaProductos = datos;
    })
  }
}
