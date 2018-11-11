import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Articulo } from '../articulo'
import { ArticuloService } from '../articulo.service';

@Component({
  selector: 'app-articulo-create',
  templateUrl: './articulo-create.component.html',
  styleUrls: ['./articulo-create.component.css'],
  providers: [DatePipe]
})
export class ArticuloCreateComponent implements OnInit {

  articulo:Articulo;
  
  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();

  constructor(private dp : DatePipe,
        private articuloService:ArticuloService,
        private toastrService: ToastrService) { }
  
  ngOnInit() {
    this.articulo = new Articulo();
  }

  createArticulo(): Articulo {
       
        this.articuloService.createArticulo(this.articulo)
            .subscribe((articulo) => {
                this.articulo = articulo;
                this.create.emit();
                this.toastrService.success("El articulo fue creado", "Creación Articulo");                
            });
            return this.articulo;
  }
  
  cancelCreation(): void {
        this.cancel.emit();
  }
}
