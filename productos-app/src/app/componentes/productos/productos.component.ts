import { Component, ElementRef,inject, OnInit, ViewChild } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{
  listaProductos: string[] = [];
  nuevoProducto: string = "";
  @ViewChild("inputProducto") inputProducto!: ElementRef;

  private _productosService = inject(ProductosService);

  constructor(){}

  ngOnInit(): void {
    this.listaProductos = this._productosService.getListaProducto();
  }

  agregarProducto(){
    if(this.nuevoProducto != ""){
      this._productosService.agregarProducto(this.nuevoProducto);
      this.listaProductos = this._productosService.getListaProducto();
      this.nuevoProducto = "";
      this.inputProducto.nativeElement.focus();
    }
  }

  eliminarProducto(posicion:number){
    this._productosService.eliminarProducto(posicion)
    this.listaProductos = this._productosService.getListaProducto();
  }
}




