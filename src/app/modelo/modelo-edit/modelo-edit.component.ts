import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Marca } from 'src/app/marca/marca'
import { ModeloService } from '../modelo.service';
import { MarcaService } from 'src/app/marca/marca.service';

import { Modelo } from '../modelo';

@Component({
  selector: 'app-modelo-edit',
  templateUrl: './modelo-edit.component.html',
  styleUrls: ['./modelo-edit.component.css']
})
export class ModeloEditComponent implements OnInit {

  constructor(private modeloService: ModeloService,
  private marcaService:MarcaService,
        private toastrService: ToastrService) { }
        

@Input() modelo_id;
 @Output() cancel = new EventEmitter();
 @Output() update = new EventEmitter();

modelo: Modelo;
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
        this.modeloService.updateModelo(this.modelo)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("La información del Modelo fue actualizada", "Edición de Modelo");
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
        this.getModelo();
        this.getMarcas();
  }
  
        ngOnChanges() {
        this.ngOnInit();
    }

}
