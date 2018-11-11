import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Factura } from '../factura'
import { FacturaService } from '../factura.service';

@Component({
  selector: 'app-factura-create',
  templateUrl: './factura-create.component.html',
  styleUrls: ['./factura-create.component.css'],
  providers: [DatePipe]
})
export class FacturaCreateComponent implements OnInit {

  factura:Factura;
  
  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();

  constructor(private dp : DatePipe,
        private facturaService:FacturaService,
        private toastrService: ToastrService) { }
  
  ngOnInit() {
    this.factura = new Factura();
  }

  createFactura(): Factura {
       
        this.facturaService.createFactura(this.factura)
            .subscribe((factura) => {
                this.factura = factura;
                this.create.emit();
                this.toastrService.success("La factura fue creado", "Creación Factura");                
            });
            return this.factura;
  }
  
  cancelCreation(): void {
        this.cancel.emit();
  }
}
