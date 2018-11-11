import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import { ClienteDetail } from '../cliente-detail';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

    /**
   * La lista de clientes.
   */
  clientes:Cliente[];
  cliente_id:number;
  selectedCliente:Cliente;

 /**
   * Constructor para el componente
   * @param clienteService El proveedor del servicio cliente
   */
  constructor(private clienteService:ClienteService) { }

  onSelected(cliente_id: number):void {
    this.cliente_id = cliente_id;
    this.selectedCliente = new ClienteDetail();
    this.getClienteDetail();

  }

  /**
   * Le pregunta al servicio para actualizar los clientes
   */
  getClientes(){
    this.clienteService.getClientes()
        .subscribe(clientes => this.clientes = clientes);
  }

  getClienteDetail(): void {
    this.clienteService.getClienteDetail(this.cliente_id)
        .subscribe(selectedCliente => {
            this.selectedCliente = selectedCliente;
        });
}

  parseDate( date:String) : Date
  {
    return new Date (Date.parse(date.substring(0,date.length-5)));
  }
  /**
   * Instancia el componente solicitando la lista de clientes
   * Este metodo es llamado cuando se crea el componente
   */
  ngOnInit() {
    this.getClientes();
  }

}
