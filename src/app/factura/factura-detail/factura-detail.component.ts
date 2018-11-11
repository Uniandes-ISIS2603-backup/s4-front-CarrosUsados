import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { FacturaService } from '../factura.service';

import { Factura } from '../factura';
import { Automovil } from '../../automovil/automovil';

@Component({
  selector: 'app-factura-detail',
  templateUrl: './factura-detail.component.html',
  styleUrls: ['./factura-detail.component.css']
})
export class FacturaDetailComponent implements OnInit {

  constructor(private facturaService: FacturaService,
        private route: ActivatedRoute,
        private toastrService: ToastrService) { }
       
  factura: Factura;
  
  factura_automovil: Automovil
  
  factura_id: number;
 
    getFactura(): void {
        this.facturaService.getFactura(this.factura_id)
            .subscribe(factura => {
                this.factura = factura;
            }, err => {
                this.toastrService.error(err, "Error");
            });
    }

    getAutomovilDeFactura(): void {
        this.facturaService.getAutomovilDeFactura(this.factura_id)
            .subscribe(automovil => this.factura_automovil = automovil);
    }

  ngOnInit() {
        this.factura_automovil = new Automovil();
        this.factura = new Factura();
        this.factura_id = + this.route.snapshot.paramMap.get('id');
        this.getFactura();
        this.getAutomovilDeFactura();
  }

}
