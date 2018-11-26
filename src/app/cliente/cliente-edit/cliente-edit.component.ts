import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {ClienteService} from '../cliente.service';
import {ClienteDetail} from '../cliente-detail';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit {
  
      /**
    * Constructor for the component
    * @param administradorService The authors' services provider
    * @param toastrService The toastr to show messages to the user
    */
   constructor(
    private clienteService: ClienteService,
    private toastrService: ToastrService,
) {}

    /**
    * The author id as received from the parent component
    */
   @Input() cliente: ClienteDetail;

   /**
   * The output which tells the parent component
   * that the user no longer wants to create an author
   */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user updated a new author
   */
   @Output() update = new EventEmitter();


    /**
    * Updates the information of the author
    */
   editCliente(): void {
    this.clienteService.updateCliente(this.cliente)
    .subscribe((cliente) => {
      this.toastrService.success("El cliente fue actualizado!", "Actualización del cliente");

    });
    this.update.emit();
}

/**
* Emits the signal to tell the parent component that the
* user no longer wants to create an user
*/
cancelEdition(): void {
    this.cancel.emit();
}

   /**
    * This function will be called when the user chooses another author to edit
    */
   ngOnChanges() {
    this.ngOnInit();
}

  ngOnInit() {
  }

}
