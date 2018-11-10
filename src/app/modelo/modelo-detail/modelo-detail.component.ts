import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { ModeloService } from '../modelo.service';

import { Modelo } from '../modelo';
import { Automovil } from '../../automovil/automovil';

@Component({
  selector: 'app-modelo-detail',
  templateUrl: './modelo-detail.component.html',
  styleUrls: ['./modelo-detail.component.css']
})
export class ModeloDetailComponent implements OnInit {

  constructor(private modeloService: ModeloService,
        private route: ActivatedRoute,
        private toastrService: ToastrService) { }
       
  modelo: Modelo;
  
  modelo_automoviles: Automovil[];
  
  modelo_id: number;
 
    getAutomoviles(): void {
        this.modeloService.getModelo(this.modelo_id)
            .subscribe(modelo => {
                this.modelo = modelo
            }, err => {
                this.toastrService.error(err, "Error");
            });
    }

    getAutomovilesByModelo(): void {
        this.modeloService.getAutomovilesOfModelo(this.modelo_id)
            .subscribe(automoviles => this.modelo_automoviles = automoviles);
    }

  ngOnInit() {
        this.modelo_automoviles = [];
        this.modelo_id = + this.route.snapshot.paramMap.get('id');
        this.modelo = new Modelo();
        this.getAutomoviles();
        this.getAutomovilesByModelo();
  }

}
