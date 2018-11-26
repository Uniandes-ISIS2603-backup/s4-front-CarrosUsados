import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { AutomovilService } from '../automovil.service';
import { AutomovilDetail } from '../automovil-detail';
import { ToastrService } from 'ngx-toastr';
import { Automovil } from '../automovil';

@Component({
  selector: 'app-automovil-edit',
  templateUrl: './automovil-edit.component.html',
  styleUrls: ['./automovil-edit.component.css']
})
export class AutomovilEditComponent implements OnInit, OnChanges {

  /**
    * Constructor for the component
    * @param automovilService El proveedor de servicos del automovil
    * @param toastrService The toastr to show messages to the user
    */
   constructor(
    private automovilService: AutomovilService,
    private toastrService: ToastrService
  ) { }

    /**
     * El id del modelo del automovil
     */
   @Input() modelo_id:number;

    /**
    * el automovil que es recibido del componente padre
    */
   @Input() automovil: Automovil;

 

   /**
   * El output que le dice al componente que el padre que el usuario no quiere editar más un automovil
   */
   @Output() cancel = new EventEmitter();
 
   /**
   * El output que le dice al componente que el padre que el usuario no quiere editar más un automovil
   */
   @Output() update = new EventEmitter();
 

/**
   * Actualzia la informacion del automovil
   */
  editAutomovil(): void {

    this.automovilService.updateAutomovil(this.modelo_id, this.automovil)
      .subscribe(() => {
        this.toastrService.success("La información del automovil ha sido actualizada", "Edición del automovil");
      });
    this.update.emit();
  }

  /**
    * Emite la señal que le dice al componente padre que ya no se quiere editar un automovil
    */
   cancelEdition(): void {
    this.cancel.emit();
  }

  ngOnInit() {
  }

  /**
    * This function will be called when the user chooses another ficha tecnica to edit
    */
   ngOnChanges() {
    this.ngOnInit();
  }

}
