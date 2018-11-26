import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { ModeloService } from '../modelo.service';
import { MarcaService } from '../../marca/marca.service';

import { Modelo } from '../modelo';
import { Marca } from '../../marca/marca';

@Component({
  selector: 'app-modelo-edit',
  templateUrl: './modelo-edit.component.html',
  styleUrls: ['./modelo-edit.component.css']
})
export class ModeloEditComponent implements OnInit {

  constructor(private modeloService: ModeloService,
        private marcaService: MarcaService,
        private toastrService: ToastrService) { }
        
modelo: Modelo;
@Input() modelo_id;
 @Output() cancel = new EventEmitter();
 @Output() update = new EventEmitter();

 marcas: Marca[];
 
     getModelo(): void {
        this.modeloService.getModelo(this.modelo_id)
            .subscribe(modelo => {
                this.modelo = modelo;
            }, err => {
                this.toastrService.error(err, "Error");
            });
    }
    
        editModelo(): void {
        this.modeloService.updateModelo(this.modelo, this.modelo.id_marca)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The editorial's information was updated", "Editorial edition");
            }, err => {
                this.toastrService.error(err, "Error");
            });
    }
    
            cancelEdition(): void {
        this.cancel.emit();
    }
    
      getMarcas() {

    this.marcaService.getMarcas()
      .subscribe(marcas => this.marcas = marcas);
  }

  ngOnInit() {
              this.modelo = new Modelo();
        this.getMarcas();
        this.getModelo();
  }
  
        ngOnChanges() {
        this.ngOnInit();
    }

}
