import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducto } from 'src/app/modelos/iproducto.modelos';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit, OnDestroy {
  productoId: Number = 0;
  private Subscription: any;
  producto?: IProducto;
  
  constructor(private _activatedRoute: ActivatedRoute, private _api: ApiService){
  }

  ngOnInit(): void {
    this.Subscription = this._activatedRoute.params.subscribe((parametro)=>{
      this.productoId = parametro['id'];
    })

    this._api.getProducto(this.productoId).subscribe((producto:IProducto)=>{
      this.producto = producto;
    })
    
  }

  ngOnDestroy(): void {
   this.Subscription.unsubscribe()
  }
}
