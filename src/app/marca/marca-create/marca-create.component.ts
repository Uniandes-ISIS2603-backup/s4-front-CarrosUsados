import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { MarcaService } from '../marca.service';
import { Marca } from '../marca';

@Component({
  selector: 'app-marca-create',
  templateUrl: './marca-create.component.html',
  styleUrls: ['./marca-create.component.css']
})
export class MarcaCreateComponent implements OnInit {

  constructor(private marcaService: MarcaService,
        private toastrService: ToastrService) { }

  marca: Marca;
 
  
  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();
  
  createMarca(): void {
        var marca_create = {
            nombre: this.marca.nombre,
            pais: this.marca.pais,
            descripcion: this.marca.descripcion
        };
        this.marcaService.createMarca(marca_create)
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
      this.marca = new Marca();
  }

}
