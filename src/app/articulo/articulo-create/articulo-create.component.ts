import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Articulo } from '../articulo'
import { ArticuloService } from '../articulo.service';
import {AutomovilService} from '../../automovil/automovil.service';
import {AutomovilDetail} from '../../automovil/automovil-detail';
import {Automovil} from '../../automovil/automovil';

@Component({
  selector: 'app-articulo-create',
  templateUrl: './articulo-create.component.html',
  styleUrls: ['./articulo-create.component.css'],
  providers: [DatePipe]
})
export class ArticuloCreateComponent implements OnInit {

  articulo:Articulo;
  auto:Automovil
  automovil:AutomovilDetail;
  
  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();

  constructor(private articuloService:ArticuloService,
        private automovilService:AutomovilService,
        private toastrService: ToastrService) { }
  
  ngOnInit() {
    this.articulo = new Articulo();
  }

  createArticulo(): Articulo {
       
        console.log(this.articulo);
      this.automovilService.getAutomovilDetail(this.articulo.idMod, this.articulo.idAuto)
      .subscribe(Automovil => {
        this.automovil = Automovil;
      });
      
      this.articulo.automovil=this.automovil;
    this.articuloService.createArticulo(this.articulo)
      .subscribe((articulo) => {
        this.articulo = articulo;
        this.create.emit();
        this.toastrService.success("El articulo fue creado", "Creación del articulo");

      });
    return this.articulo;
  }
  
  cancelCreation(): void {
        this.cancel.emit();
  }
}
