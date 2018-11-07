import { Component, OnInit } from '@angular/core';

import { Fichatecnica } from '../fichatecnica'
import { FichatecnicaService } from '../fichatecnica.service';


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

  /**
   * Le pregunta al servicio para actualizar las fichastecnicas
   */
  getFichasTecnicas(){
    this.fichaTecnicaService.getFichasTecnicas()
        .subscribe(fichasTecnicas => this.fichasTecnicas = fichasTecnicas);
  }

  ngOnInit() {
    this.getFichasTecnicas();
  }

}
