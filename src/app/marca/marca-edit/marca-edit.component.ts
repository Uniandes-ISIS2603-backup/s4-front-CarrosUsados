import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { MarcaService } from '../marca.service';

import { Marca } from '../marca';


@Component({
  selector: 'app-marca-edit',
  templateUrl: './marca-edit.component.html',
  styleUrls: ['./marca-edit.component.css']
})
export class MarcaEditComponent implements OnInit {

  constructor(private marcaService: MarcaService,
        private toastrService: ToastrService) { }

 @Input() marca_id;
 @Output() cancel = new EventEmitter();
 @Output() update = new EventEmitter();
 
 marca: Marca;
 
     getMarca(): void {
        this.marcaService.getMarca(this.marca_id)
            .subscribe(marca => {
                this.marca = marca;
            }, err => {
                this.toastrService.error(err, "Error");
            });
    }
    
        editMarca(): void {
        this.marcaService.updateMarca(this.marca)
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

  ngOnInit() {
              this.marca = new Marca();
        this.getMarca();
  }
  
      ngOnChanges() {
        this.ngOnInit();
    }

}
