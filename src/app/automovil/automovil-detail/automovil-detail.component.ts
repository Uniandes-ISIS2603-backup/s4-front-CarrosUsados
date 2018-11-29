import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { AutomovilService } from '../automovil.service';


import { AutomovilDetail } from '../automovil-detail';
import { Automovil } from '../automovil';
import { Calificacion } from '../../calificacion/calificacion'
import { Modelo } from '../../modelo/modelo'
import { CalificacionService } from 'src/app/calificacion/calificacion.service';

@Component({
  selector: 'app-automovil-detail',
  templateUrl: './automovil-detail.component.html',
  styleUrls: ['./automovil-detail.component.css']
})
export class AutomovilDetailComponent implements OnInit {


  /**
    * El automovil
    */
  @Input() automovilDetail: AutomovilDetail;


  constructor(
    private route: ActivatedRoute,
    private automovilService: AutomovilService
  ) { }

  /**
  * El id del automovil que viene en el path get .../modelos/modelo_id/automoviles/automovil_id
  */
  automovil_id: number;

  /**
     * El metodo que obtiene el detalle del automovil que queremos mostrar
     */
  getAutomovilDetailConModelo(modeloId): void {
    this.automovilService.getAutomovilDetailConModelo(modeloId, this.automovil_id)
      .subscribe(automovilDetail => {
        this.automovilDetail = automovilDetail
      });
  }

  ngOnInit() {
    this.automovil_id = +this.route.snapshot.paramMap.get('id');
    if (this.automovil_id) {
      this.automovilDetail = new AutomovilDetail();
      //this.getAutomovilDetail();
      var idModelo = 1;
      this.getAutomovilDetailConModelo(idModelo);
    }
  }

}
