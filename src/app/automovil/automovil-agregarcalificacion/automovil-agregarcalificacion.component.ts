import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { AutomovilService } from '../automovil.service';
import { AutomovilDetail } from '../automovil-detail';
import { Automovil } from '../automovil';
import { Calificacion } from '../../calificacion/calificacion'
import { Modelo } from '../../modelo/modelo'
import { CalificacionService } from 'src/app/calificacion/calificacion.service';

@Component({
  selector: 'app-automovil-agregarcalificacion',
  templateUrl: './automovil-agregarcalificacion.component.html',
  styleUrls: ['./automovil-agregarcalificacion.component.css']
})
export class AutomovilAgregarcalificacionComponent implements OnInit {

/**
    * El automovil
    */
   @Input() automovil: AutomovilDetail;

   /**
    * El id del modelo del automovil
    */
   @Input() modelo_id: any;

   calificacion: Calificacion;

   /**
  * The output which tells the parent component
  * that the user no longer wants to create an Automovil
  */
  @Output() cancel = new EventEmitter();

  /**
  * The output which tells the parent component
  * that the user created a new Automovil
  */
 @Output() create = new EventEmitter();

  constructor(
    private calificacionService:CalificacionService,
    private toastrService: ToastrService
  ) { }


  createCalificacion(){
    /*
    console.log('ID del punto de venta:'+this.automovil.puntoVenta.id);
    console.log('ID de la variable punto de venta:'+this.puntoVenta_id);
    */
    this.calificacionService.createCalificacionAutomovil(this.modelo_id, this.automovil.id, this.calificacion)
      .subscribe((automovil) => {
        this.calificacion = this.calificacion;
        this.create.emit();
        this.toastrService.success("La calificacion fue creada", "Creación de la calificacion");

      });
    return this.automovil;
  }

  cancelAgregar(){
    this.cancel.emit();
  }

  ngOnInit() {
    this.calificacion = new Calificacion();
  }

}
