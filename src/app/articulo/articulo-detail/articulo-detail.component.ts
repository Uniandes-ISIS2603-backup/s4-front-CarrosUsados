import { Component, Input, Output,OnInit,EventEmitter } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { ArticuloService } from '../articulo.service';

import { Articulo } from '../articulo';

import { Factura } from '../../factura/factura';

import { FacturaService } from '../../factura/factura.service'

@Component({
  selector: 'app-articulo-detail',
  templateUrl: './articulo-detail.component.html',
  styleUrls: ['./articulo-detail.component.css']
})
export class ArticuloDetailComponent implements OnInit {

  constructor(private articuloService: ArticuloService,
        private facturaService: FacturaService,
        private route: ActivatedRoute,
        private toastrService: ToastrService) { }
       
  @Input() articulo: Articulo;
  
  factura: Factura;
  
  @Output() create = new EventEmitter();
  
  articulo_id: number;
 
    getArticulo(): void {
        this.articuloService.getArticulo(this.articulo_id)
            .subscribe(articulo => {
                this.articulo = articulo;
            }, err => {
                this.toastrService.error(err, "Error");
            });
    }
    
    createFactura():void{
        this.factura.automovil=this.articulo.automovil;
        this.factura.subtotal = this.articulo.precio;
        this.factura.total = (this.articulo.precio * 1.05) + 100000;
        this.factura.descripcion = "El articulo " + this.articulo.id + " fue comprado por " + this.factura.total;
        this.factura.comprobantePago = true;
    this.facturaService.createFactura(this.factura)
      .subscribe((factura) => {
        this.factura = factura;
        this.create.emit();
        this.toastrService.success("El articulo fue comprado", "Compra");

      });
        this.articulo.factura = this.factura;
    }

  ngOnInit() {
        this.articulo = new Articulo();
        this.articulo_id = + this.route.snapshot.paramMap.get('id');
        this.getArticulo();
  }

}
