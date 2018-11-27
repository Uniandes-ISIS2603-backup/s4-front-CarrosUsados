import { Component, OnInit, Input } from '@angular/core';
import { Calificacion } from 'src/app/calificacion/calificacion';

@Component({
  selector: 'app-puntoventa-calificaciones',
  templateUrl: './puntoventa-calificaciones.component.html',
  styleUrls: ['./puntoventa-calificaciones.component.css']
})
export class PuntoventaCalificacionesComponent implements OnInit {

  constructor() { }

  /**lista de calificaciones */
  @Input() calificacionespunto : Calificacion[];
    
  public isCollapsed = true;
  
  /**
   * Se llama cuando se postea una claificacion para actualizar la lisrra
   */
  updateReviews(calificaciones :Calificacion[]): void {
      this.calificacionespunto = calificaciones;
  }
  ngOnInit() {
  }

}
