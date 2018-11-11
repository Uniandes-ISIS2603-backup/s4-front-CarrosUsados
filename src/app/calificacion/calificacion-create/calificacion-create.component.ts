
  import { Component, OnInit, EventEmitter , Output} from '@angular/core';
  import { Calificacion} from '../calificacion';
  import { ToastrService} from 'ngx-toastr';
  import { CalificacionService } from '../calificacion.service';


@Component({
  selector: 'app-calificacion-create',
  templateUrl: './calificacion-create.component.html',
  styleUrls: ['./calificacion-create.component.css']
})
export class CalificacionCreateComponent implements OnInit {
 
  constructor(
    private calificacionService: CalificacionService,
    private toastrService: ToastrService
  ) { }

  calificacion: Calificacion;

      /**
    * The output which tells the parent component
    * that the user no longer wants to create puntoventa
    */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user created a new puntoventa
   */
   @Output() create = new EventEmitter();

   /**
    * Crea punto
    */
   createCalificacion(): void {
    var calificacion_create = {
        numeroEstrellas: this.calificacion.numeroEstrellas,
        comentario: this.calificacion.comentario,
        
    };
    this.calificacionService.createCalificacion(calificacion_create)
        .subscribe(() => {
            this.create.emit();
            this.toastrService.success("La calificación fue creada", "Creación de calilficación");
        }, err => {
            this.toastrService.error(err, "Error");
        });
}

/**
* Emits the signal to tell the parent component that the
* user no longer wants to create an user
*/
cancelCreation(): void {
    this.cancel.emit();
}

/**
* This function will initialize the component
*/
ngOnInit() {
    this.calificacion= new Calificacion();
}

}
 
  
 
