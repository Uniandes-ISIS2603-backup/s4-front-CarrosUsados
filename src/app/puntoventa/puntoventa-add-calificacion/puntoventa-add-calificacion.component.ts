import { Component, OnInit, Input,Output, EventEmitter, OnChanges } from '@angular/core';
import { PuntoventaService } from '../puntoventa.service';
import { ToastrService } from 'ngx-toastr';
import { Puntoventa } from '../puntoventa';
import { Calificacion } from 'src/app/calificacion/calificacion';
import { NgForm } from '@angular/forms';
import { PuntoventaDetail } from '../puntoventa-detail';

@Component({
  selector: 'app-puntoventa-add-calificacion',
  templateUrl: './puntoventa-add-calificacion.component.html',
  styleUrls: ['./puntoventa-add-calificacion.component.css']
})
export class PuntoventaAddCalificacionComponent implements OnInit,OnChanges {

  constructor(private puntoventaService: PuntoventaService, private toastrService: ToastrService) { }


  @Input() puntoventa: Puntoventa;

  /**
  * La calificacion a publicar
  */
  calificacion: Calificacion;
  @Input() punto_id:number;
  
  public isCollapsed = true;

    /**
    * The Event Emitter que envia una señal cuando una calificacion es publicada
    * para que se actualice la lista de calificaciones
    */
   @Output() updateReviews = new EventEmitter();

   postReview(calificacionForm: NgForm): Calificacion {
    this.calificacion.puntoventa = this.puntoventa;
    this.puntoventaService.createCalificacion(this.punto_id,this.calificacion)
        .subscribe(() => {
            calificacionForm.resetForm();
            this.updateReviews.emit();
            this.toastrService.success("La calificación fue creada", 'Calificacion agregada');
        }, err => {
            this.toastrService.error(err, 'Error');
        });
        console.log(this.puntoventa)
    return this.calificacion;
}

  ngOnInit() {
    this.calificacion= new Calificacion();
  }
  
  
    /**
    * Da cuenta de que el id del punto de venta ha cambiado
    * se actualizan las calificaciones
    */
  ngOnChanges()
  {
    this.ngOnInit();
  }

}
