import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  private storageKey: string = "listaCompra";

  constructor() {  }

  getListaProducto():string[]{
    return JSON.parse(localStorage.getItem(this.storageKey) as string) || [];
  }

  agregarProducto(producto:string):void{
    let lista:string[] = this.getListaProducto();
    lista.push(producto);
    localStorage.setItem(this.storageKey,JSON.stringify(lista))
  }

  eliminarProducto(posicion:number):void{
    let lista:string[] = this.getListaProducto();
    lista.splice(posicion,1);
    localStorage.setItem(this.storageKey,JSON.stringify(lista))
  }
}
