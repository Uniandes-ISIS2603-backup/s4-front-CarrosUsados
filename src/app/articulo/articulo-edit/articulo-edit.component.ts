import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { ArticuloService } from '../articulo.service';
import { Articulo } from '../articulo';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-articulo-edit',
  templateUrl: './articulo-edit.component.html',
  styleUrls: ['./articulo-edit.component.css'],
})
export class ArticuloEditComponent implements OnInit, OnChanges {

  /**
    * Constructor for the component
    * @param articuloService El proveedor de servicos del articulo
    * @param toastrService The toastr to show messages to the user
    */
   constructor(
    private articuloService: ArticuloService,
    private toastrService: ToastrService
  ) { }

    /**
    * el articulo recibido del componente padre
    */
   @Input() articulo: Articulo;
   /**
   * El output que le dice al componente que el padre que el usuario no quiere editar más el articulo
   */
   @Output() cancel = new EventEmitter 
   /**
   * El output que le dice al componente que el padre que el usuario quiere terminar de editar el articulo
   */
   @Output() update = new EventEmitter();
   
   /**
   * Actualiza la informacion del articulo
   */
  editArticulo(): void {

    this.articuloService.updateArticulo(this.articulo)
      .subscribe(() => {
        this.toastrService.success("La información del articulo ha sido actualizada", "Edición del articulo");
      });
    this.update.emit();
  }

  /**
    * Emite la señal que le dice al componente padre que ya no se quiere editar un articulo
    */
   cancelEdition(): void {
    this.cancel.emit();
  }

  ngOnInit() {
  }

  /**
    * This function will be called when the user chooses another articulo
    */
   ngOnChanges() {
    this.ngOnInit();
  }

}
