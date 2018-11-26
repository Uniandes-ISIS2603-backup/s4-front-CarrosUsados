import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {AdministradorService} from '../administrador.service';
import {AdministradorDetail} from '../administrador-detail';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-administrador-edit',
  templateUrl: './administrador-edit.component.html',
  styleUrls: ['./administrador-edit.component.css']
})
export class AdministradorEditComponent implements OnInit {

      /**
    * Constructor for the component
    * @param administradorService The authors' services provider
    * @param toastrService The toastr to show messages to the user
    */
   constructor(
    
    private administradorService: AdministradorService,
    private toastrService: ToastrService,
) {}

    /**
    * The author id as received from the parent component
    */
   @Input() administrador: AdministradorDetail;

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
   editAdministrador(): void {
    this.administradorService.updateAdministrador(this.administrador)
    .subscribe(() => {
      this.toastrService.success("El administrador fue actualizado!", "Actualización del administrador");

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
