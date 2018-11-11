import { Component, OnInit } from '@angular/core';

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
  constructor(private fichaTecnicaService: FichatecnicaService) { }

  /**
   * La lista de fichas tecnicas
   */
  fichasTecnicas: Fichatecnica[];
  fichaTecnica_id: number;

  /**
  * Muestra o esconde el componente fichatecnica-create-component
  */
  showCreate: boolean;

  showEdit:boolean;

  /**
   * Muestra o esconde el detalle de una a ficha tecnica
   */
  showView: boolean;

  selectedFichaTecnica: Fichatecnica;

  onSelected(fichaTecnica_id: number): void {
    this.showCreate = false;
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
      this.selectedFichaTecnica= new Fichatecnica();
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

  ngOnInit() {
    this.showCreate = false;
    this.showView = false;
    this.selectedFichaTecnica = undefined;
    this.fichaTecnica_id = undefined;
    this.getFichasTecnicas();
  }

}
