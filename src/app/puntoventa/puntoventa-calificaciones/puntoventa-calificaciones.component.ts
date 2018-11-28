import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Calificacion } from 'src/app/calificacion/calificacion';
import { PuntoventaService } from '../puntoventa.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-puntoventa-calificaciones',
  templateUrl: './puntoventa-calificaciones.component.html',
  styleUrls: ['./puntoventa-calificaciones.component.css']
})
export class PuntoventaCalificacionesComponent implements OnInit {
   

  constructor(private puntoventaService: PuntoventaService , private toastrService: ToastrService) { }

  /**lista de calificaciones @input()*/
  calificacionespunto : Calificacion[];
    
  public isCollapsed = false;


   /**
   * The id of the book whose reviews we want to show
   * This attribute is set by the parent component
   */
  @Input() punto_id: number;

  
  /**
   * Se llama cuando se postea una claificacion para actualizar la lisrra
   */
  updateReviews(calificaciones :Calificacion[]): void {
      this.calificacionespunto = calificaciones;
  }

 
   /**
   * The page (controls pagination)
   */
   page: number;

   /**
   * The function which obtains the reviews of the book
   */
   getReviews(): void {
       console.log(this.punto_id)
       this.puntoventaService.getReviews(this.punto_id)
           .subscribe(reviews => this.calificacionespunto = reviews);
   }

   /**
   * The function which initializes the component.
   */
   ngOnInit() {
       this.calificacionespunto = [];
       this.page = 1;
       if (this.punto_id != undefined && this.punto_id!=0 ) {
           this.getReviews();
       }
   }


    /**elimina un punto de venta */
  deleteCalificacion(calificacionId): void {
     
    this.puntoventaService.deleteReview(this.punto_id,calificacionId).subscribe(() => {
        this.toastrService.error("La calificación fue eliminada correctamente.", "Calificación eliminada.");
        this.ngOnInit();
        this.calificacionespunto.splice(this.calificacionespunto.indexOf(calificacionId));
    }, err => {
        this.toastrService.error(err, "Error");
    });
}
   // return true;

   /**
   * The function which notices that the input which defines the book_id has changed.
   * If the book has changed, we update the reviews to show
   */
   ngOnChanges(changes: SimpleChanges) {
       if (changes['punto_id']) {
           this.ngOnInit();
       }
   }

}
