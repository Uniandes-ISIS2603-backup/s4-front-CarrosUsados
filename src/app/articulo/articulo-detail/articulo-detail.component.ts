import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { ArticuloService } from '../articulo.service';

import { Articulo } from '../articulo';
import { Automovil } from '../../automovil/automovil';
import { Factura } from '../../factura/factura';

@Component({
  selector: 'app-articulo-detail',
  templateUrl: './articulo-detail.component.html',
  styleUrls: ['./articulo-detail.component.css']
})
export class ArticuloDetailComponent implements OnInit {

  constructor(private articuloService: ArticuloService,
        private route: ActivatedRoute,
        private toastrService: ToastrService) { }
       
  articulo: Articulo;
  
  articulo_automovil: Automovil
  
  articulo_factura: Factura
  
  articulo_id: number;
 
    getArticulo(): void {
        this.articuloService.getArticulo(this.articulo_id)
            .subscribe(articulo => {
                this.articulo = articulo;
            }, err => {
                this.toastrService.error(err, "Error");
            });
    }

    getAutomovilDeArticulo(): void {
        this.articuloService.getAutomovilDeArticulo(this.articulo_id)
            .subscribe(automovil => this.articulo_automovil = automovil);
    }
    
    getFacturaDeArticulo(): void {
        this.articuloService.getFacturaDeArticulo(this.articulo_id)
            .subscribe(factura => this.articulo_factura = factura);
    }

  ngOnInit() {
        this.articulo_automovil = new Automovil();
        this.articulo_factura = new Factura();
        this.articulo = new Articulo();
        this.articulo_id = + this.route.snapshot.paramMap.get('id');
        this.getArticulo();
        this.getAutomovilDeArticulo();
        this.getFacturaDeArticulo();
  }

}
