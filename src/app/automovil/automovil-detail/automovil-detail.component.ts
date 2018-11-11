import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { AutomovilService } from '../automovil.service';


import { AutomovilDetail } from '../automovil-detail';
import { Automovil } from '../automovil';

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
  getAutomovilDetail(): void {
    this.automovilService.getAutomovilDetail(this.automovil_id)
      .subscribe(automovilDetail => {
        this.automovilDetail = automovilDetail
      });
  }

  ngOnInit() {
    this.automovil_id = +this.route.snapshot.paramMap.get('id');
    if (this.automovil_id) {
      this.automovilDetail = new AutomovilDetail();
      this.getAutomovilDetail();
    }
  }

}
