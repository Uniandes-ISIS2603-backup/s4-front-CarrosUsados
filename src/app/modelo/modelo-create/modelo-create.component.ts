import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { ModeloService } from '../modelo.service';
import { Modelo } from '../modelo';

@Component({
  selector: 'app-modelo-create',
  templateUrl: './modelo-create.component.html',
  styleUrls: ['./modelo-create.component.css']
})
export class ModeloCreateComponent implements OnInit {

  constructor(private modeloService: ModeloService,
        private toastrService: ToastrService) { }
        
  modelo: Modelo;
 
  
  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();
  
  createModelo(): void {
        var modelo_create = {
            num_puertas: this.modelo.num_puertas,
            transmision: this.modelo.transmision,
            centimetros_cubicos: this.modelo.centimetros_cubicos
        };
        this.modeloService.createModelo(modelo_create)
            .subscribe(() => {
                this.create.emit();
                this.toastrService.success("The author was created", "Author creation");
            }, err => {
                this.toastrService.error(err, "Error");
            });
    }

    cancelCreation(): void {
        this.cancel.emit();
    }
    
  ngOnInit() {
      this.modelo = new Modelo();
  }

}
