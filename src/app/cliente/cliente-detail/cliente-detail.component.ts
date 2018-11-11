import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ClienteService } from '../cliente.service';
import { ClienteDetail } from '../cliente-detail'; 

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit {

  /**
      * la ficha tecnica
      */
     @Input() clienteDetail: ClienteDetail;


 /**
* El id de la ficha tecnica que viene en el path get .../clientes/clientes_id
*/
  cliente_id: number;

  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService
  ) { }

/**
  * El metodo que obtiene el detalle de la ficha tecnica que queremos mostrar
  */
 getClienteService(): void {
  this.clienteService.getClienteDetail(this.cliente_id)
    .subscribe(clienteDetail => {
      this.clienteDetail = clienteDetail
    });
}

parseDate( date:String) : Date
{
  return new Date (Date.parse(date.substring(0,date.length-5)));
}

  ngOnInit() {
    this.cliente_id = +this.route.snapshot.paramMap.get('id');
    if (this.cliente_id) {
      this.clienteDetail = new ClienteDetail();
      this.getClienteService();
  }

}
}