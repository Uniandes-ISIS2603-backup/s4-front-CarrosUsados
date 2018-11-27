import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';

import { Fichatecnica } from '../fichatecnica'
import { FichatecnicaService } from '../fichatecnica.service';
import { FichatecnicaDetail } from '../fichatecnica-detail';


@Component({
  selector: 'app-fichatecnica-list',
  templateUrl: './fichatecnica-list.component.html',
  styleUrls: ['./fichatecnica-list.component.css']
})
export class FichatecnicaListComponent implements OnInit {
  /**
   * Constructor del componente
   * @param fichaTecnicaService El proveedor del servicio ficha tecnica
   */
  constructor(
    private fichaTecnicaService: FichatecnicaService,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService
  ) { }

  /**
   * La lista de fichas tecnicas
   */
  fichasTecnicas: Fichatecnica[];
  /**
   * El id de la ficha tecnica seleccionada
   */
  fichaTecnica_id: number;

  /**
  * Muestra o esconde el componente fichatecnica-create-component
  */
  showCreate: boolean;

  showEdit: boolean;

  /**
   * Muestra o esconde el detalle de una a ficha tecnica
   */
  showView: boolean;

  selectedFichaTecnica: Fichatecnica;

  onSelected(fichaTecnica_id: number): void {
    this.showCreate = false;
    //this.showEdit = false;
    this.showView = true;
    this.fichaTecnica_id = fichaTecnica_id;
    this.selectedFichaTecnica = new FichatecnicaDetail();
    this.getFichaTecnicaDetail();

  }

  /**
    * Muestra o esconde el componente de crear una ficha tecnica
    */
  showHideCreate(): void {
    this.showView = false;
    this.showEdit = false;
    this.showCreate = !this.showCreate;
  }

  /**
      * Shows or hides the create component
      */
  showHideEdit(fichatecnica_id: number): void {
    if (!this.showEdit || (this.showEdit && fichatecnica_id != this.selectedFichaTecnica.id)) {
      this.showView = false;
      this.showCreate = false;
      this.showEdit = true;
      this.fichaTecnica_id = fichatecnica_id;
      this.selectedFichaTecnica = new Fichatecnica();
      this.getFichaTecnicaDetail();
    }
    else {
      this.showEdit = false;
      this.showView = true;
    }
  }

  /**
   * Le pregunta al servicio para actualizar las fichastecnicas
   */
  getFichasTecnicas() {
    this.fichaTecnicaService.getFichasTecnicas()
      .subscribe(fichasTecnicas => this.fichasTecnicas = fichasTecnicas);
  }

  getFichaTecnicaDetail(): void {
    this.fichaTecnicaService.getFichaTecnicaDetail(this.fichaTecnica_id)
      .subscribe(selectedFichaTecnica => {
        this.selectedFichaTecnica = selectedFichaTecnica;
      });
  }

  updateFichaTecnica(): void {
    this.showEdit = false;
    this.showView = true;
  }

  /**
      * Elimina una ficha tecnica
      */
  deleteFichaTecnica(fichaTecnicaId): void {
    this.fichaTecnicaService.deleteFichaTecnica(fichaTecnicaId).subscribe(() => {
      this.toastrService.success("La ficha tecnica fue eliminada correctamente.", "Ficha tecnica eliminada.");
      this.ngOnInit();
    }, err => {
      if (String(err).includes("500"))
      this.toastrService.error("No se puede borrar la ficha técnica de un automóvil existente", "Error");
      else
      this.toastrService.error(err, "Error");
    });

    
    /*
    this.modalDialogService.openDialog(this.viewRef, {
      title: 'Eliminar una ficha tecnica',
      childComponent: SimpleModalComponent,
      data: { text: 'Esta seguro que desea eliminar la ficha técnica?' },
      actionButtons: [
        {
          text: 'Si',
          buttonClass: 'btn btn-danger',
          onAction: () => {
            this.fichaTecnicaService.deleteFichaTecnica(fichaTecnicaId).subscribe(() => {
              this.toastrService.error("La ficha tecnica fue eliminada satisfactoriamente", "Fichas técnica eliminada");
              this.ngOnInit();
            }, err => {
              this.toastrService.error(err, "Error");
            });
            return true;
          }
        },
        { text: 'No', onAction: () => true }
      ]
    });*/
  }

  ngOnInit() {
    this.showCreate = false;
    this.showView = false;
    this.showEdit = false;
    this.selectedFichaTecnica = undefined;
    this.fichaTecnica_id = undefined;
    this.getFichasTecnicas();
  }

}
