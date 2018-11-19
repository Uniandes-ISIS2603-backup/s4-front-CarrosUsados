
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
   
    this.calificacionService.createCalificacion(this.calificacion)
        .subscribe((calificacion) => {
            this.calificacion= calificacion;
            this.create.emit();
            this.toastrService.success("La calificación fue creada", "Creación de calilficación");
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
 
  
 
