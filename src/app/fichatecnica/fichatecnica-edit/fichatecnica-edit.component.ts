import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { FichatecnicaService } from '../fichatecnica.service';
import { FichatecnicaDetail } from '../fichatecnica-detail';
import { ToastrService } from 'ngx-toastr';
import { Fichatecnica } from '../fichatecnica';

@Component({
  selector: 'app-fichatecnica-edit',
  templateUrl: './fichatecnica-edit.component.html',
  styleUrls: ['./fichatecnica-edit.component.css']
})
export class FichatecnicaEditComponent implements OnInit, OnChanges {

  /**
    * Constructor for the component
    * @param fichatecnicaService El proveedor de serviicos de la ficha tecnica
    * @param toastrService The toastr to show messages to the user
    */
  constructor(
    private fichatecnicaService: FichatecnicaService,
    private toastrService: ToastrService
  ) { }

  /**
    * La ficha tecnica que es recibida del componente padre
    */
  @Input() fichaTecnica: Fichatecnica;

  /**
  * El output que le dice al componente que el padre que el usuario no quiere editar más una ficha tecnica
  */
  @Output() cancel = new EventEmitter();

  /**
  * El output que le dice al componente que el padre que el usuario no quiere editar más una ficha tecnica
  */
  @Output() update = new EventEmitter();



  /**
   * Actualzia la informacion de la ficha tecnica
   */
  editFichaTecnica(): void {

    this.fichatecnicaService.updateFichaTecnica(this.fichaTecnica)
      .subscribe(() => {
        this.toastrService.success("La información de la ficha técnica ha sido actualizada", "Edición de la ficha técnica");
      });
    this.update.emit();
  }

  /**
    * Emite la señal que le dice al componente padre que ya no se queire editar una ficha tecnica
    */
  cancelEdition(): void {
    this.cancel.emit();
  }

  /**
   * Inicializa el componente
   */
  ngOnInit() {


  }

  /**
    * This function will be called when the user chooses another ficha tecnica to edit
    */
  ngOnChanges() {
    this.ngOnInit();
  }

}
