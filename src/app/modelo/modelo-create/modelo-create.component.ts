 import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Marca } from 'src/app/marca/marca'
import { ModeloService } from '../modelo.service';
import { MarcaService } from 'src/app/marca/marca.service';
import { Modelo } from '../modelo';

@Component({
  selector: 'app-modelo-create',
  templateUrl: './modelo-create.component.html',
  styleUrls: ['./modelo-create.component.css']
})
export class ModeloCreateComponent implements OnInit {

  constructor(private modeloService: ModeloService,
  private marcaService:MarcaService,
        private toastrService: ToastrService) { }
        
  modelo: Modelo;
   marcas: Marca[];
 
  
  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();
  
  createModelo(): void {
        var modelo_create = {
            nombre: this.modelo.nombre,
            num_puertas: this.modelo.num_puertas,
            transmision: this.modelo.transmision,
            centimetros_cubicos: this.modelo.centimetros_cubicos,
            id_marca: this.modelo.id_marca
        };
        this.modeloService.createModelo(modelo_create)
            .subscribe(() => {
                this.create.emit();
                this.toastrService.success("The Model was created", "Model creation");
            }, err => {
                this.toastrService.error(err, "Error");
            });
    }

    cancelCreation(): void {
        this.cancel.emit();
    }
    
  getMarcas() {

    this.marcaService.getMarcas()
      .subscribe(marcas => this.marcas = marcas);
  }
    
  ngOnInit() {
      this.modelo = new Modelo();
      this.getMarcas();
  }

}
