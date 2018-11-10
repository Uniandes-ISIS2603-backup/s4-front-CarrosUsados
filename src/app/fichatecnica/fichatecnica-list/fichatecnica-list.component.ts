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
  constructor(private fichaTecnicaService:FichatecnicaService) { }

  /**
   * La lista de fichas tecnicas
   */
  fichasTecnicas:Fichatecnica[];
  fichaTecnica_id:number;
  selectedFichaTecnica:Fichatecnica;

  onSelected(fichaTecnica_id: number):void {
    this.fichaTecnica_id = fichaTecnica_id;
    this.selectedFichaTecnica = new FichatecnicaDetail();
    this.getFichaTecnicaDetail();

  }


  /**
   * Le pregunta al servicio para actualizar las fichastecnicas
   */
  getFichasTecnicas(){
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
    this.getFichasTecnicas();
  }

}
