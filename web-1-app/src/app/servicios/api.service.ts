import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducto } from '../modelos/iproducto.modelos';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url: string="http://localhost:5000/api/productos";

  constructor(private _httpClient:HttpClient) { }

  public getProductos(): Observable<IProducto[]>{
    return this._httpClient.get<IProducto[]>(this.url)
  }

  public getProducto(id:Number):Observable<IProducto>{
    return this._httpClient.get<IProducto>(this.url+"/"+id)
  }
}
