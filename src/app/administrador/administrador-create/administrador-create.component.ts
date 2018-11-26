import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdministradorService } from '../administrador.service';
import { Administrador } from '../administrador';
@Component({
  selector: 'app-administrador-create',
  templateUrl: './administrador-create.component.html',
  styleUrls: ['./administrador-create.component.css']
})
export class AdministradorCreateComponent implements OnInit {

  constructor(private administradorService: AdministradorService,
    private toastrService: ToastrService) { }

     /**
    * El nuevo administrador.
    */
   administrador: Administrador;

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
  * Crea un administrador
  */   

 createAdministrador(): Administrador {
    debugger;
  this.administradorService.createAdministrador(this.administrador)
    .subscribe((administrador) => {
      this.administrador = administrador;
      this.create.emit();
      this.toastrService.success("El administrador fue creado!", "Creación del administrador");

    });
  return this.administrador;
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
  this.administrador = new Administrador();
}
}
