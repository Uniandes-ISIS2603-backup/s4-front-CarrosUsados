import { Component, OnInit } from '@angular/core';
import { Factura } from '../factura'
import { FacturaService } from '../factura.service';

@Component({
  selector: 'app-factura-list',
  templateUrl: './factura-list.component.html',
  styleUrls: ['./factura-list.component.css']
})
export class FacturaListComponent implements OnInit {

  facturas:Factura[];

  constructor(private facturaService:FacturaService) { }
  
  ngOnInit() {
    this.getFacturas();
  }

  getFacturas(){
      this.facturaService.getFacturas()
        .subscribe(facturas => this.facturas = facturas);
  }

  

}
