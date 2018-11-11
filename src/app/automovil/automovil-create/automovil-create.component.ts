import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { AutomovilService } from '../automovil.service';
import { Automovil } from '../automovil';

@Component({
  selector: 'app-automovil-create',
  templateUrl: './automovil-create.component.html',
  styleUrls: ['./automovil-create.component.css']
})
export class AutomovilCreateComponent implements OnInit {

  constructor(
    private automovilService: AutomovilService,
    private toastrService: ToastrService
  ) { }
  
  /**
    * El nuevo Automovil
    */
   automovil: Automovil;

   /**
   * The output which tells the parent component
   * that the user no longer wants to create an Automovil
   */
   @Output() cancel = new EventEmitter();
 
   /**
   * The output which tells the parent component
   * that the user created a new Automovil
   */
   @Output() create = new EventEmitter();


   /**
  * Crea una ficha técnica
  */
  createAutomovil(): Automovil {

    
    console.log(this.automovil);
    this.automovilService.createAutomovil(this.automovil)
      .subscribe((automovil) => {
        this.automovil = automovil;
        this.create.emit();
        this.toastrService.success("El automovil fue creado", "Creación del automovil");

      });
    return this.automovil;
  }

  /**
  * Emits the signal to tell the parent component that the
  * user no longer wants to create an Automovil
  */
 cancelCreation(): void {
  this.cancel.emit();
}

  ngOnInit() {
    this.automovil = new Automovil();
  }

}
