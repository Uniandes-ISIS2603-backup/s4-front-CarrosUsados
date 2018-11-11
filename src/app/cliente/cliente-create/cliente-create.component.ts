import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  constructor(
    private clienteService: ClienteService,
    private toastrService: ToastrService
  ) { }

   /**
    * El nuevo cliente.
    */
   cliente: Cliente;

   /**
   * The output which tells the parent component
   * that the user no longer wants to create an author
   */
   @Output() cancel = new EventEmitter();
 
   /**
   * The output which tells the parent component
   * that the user created a new author
   */
   @Output() create = new EventEmitter();

  /**
  * Crea un cliente
  */   
   createCliente(): Cliente {
    
    this.clienteService.createCliente(this.cliente)
      .subscribe((cliente) => {
        this.cliente = cliente;
        this.create.emit();
        this.toastrService.success("El cliente fue creado!", "Creación del cliente");

      });
    return this.cliente;
  }

  /**
  * Emits the signal to tell the parent component that the
  * user no longer wants to create an user
  */
  cancelCreation(): void {
    this.cancel.emit();
  }

  /**
  * This function will initialize the component
  */
  ngOnInit() {
    this.cliente = new Cliente();
  }

}
