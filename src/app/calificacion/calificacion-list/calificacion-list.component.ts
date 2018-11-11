import { Component, OnInit } from '@angular/core';
import { Calificacion } from '../calificacion';
import { CalificacionService } from '../calificacion.service';
import {CalificacionDetail} from '../calificacion-detail';

@Component({
  selector: 'app-calificacion-list',
  templateUrl: './calificacion-list.component.html',
  styleUrls: ['./calificacion-list.component.css']
})
export class CalificacionListComponent implements OnInit {

  calificaciones:Calificacion[];

  constructor(private calificacionService:CalificacionService) { }
 
  calificacion_id: number;
  showCreate: boolean;

  showEdit:boolean;

  /**
   * Muestra o esconde el detalle de una a ficha tecnica
   */
  showView: boolean;

  selectedCalificacion: Calificacion ;

  onSelected(calificacion_id: number): void {
    this.showCreate = false;
    this.showView = true;
    this.calificacion_id = calificacion_id;
    this.selectedCalificacion = new CalificacionDetail();
    this.getCalificacionDetail();

  }

   
  showHideCreate(): void {
    this.showView = false;
    this.showCreate = !this.showCreate;
  }

  /**
      * Shows or hides the create component
      */
  showHideEdit(calificacion_id: number): void {
    if (!this.showEdit || (this.showEdit && this.calificacion_id != this.selectedCalificacion.id)) {
      this.showView = false;
      this.showCreate = false;
      this.showEdit = true;
      this.calificacion_id = calificacion_id;
      this.selectedCalificacion= new Calificacion();
      this.getCalificacionDetail();
    }
    else {
      this.showEdit = false;
      this.showView = true;
    }}
  getCalificaciones(){
    this.calificacionService.getCalificaciones()
        .subscribe(calificaciones=> this.calificaciones = calificaciones);
  }

  getCalificacionDetail(): void {
    this.calificacionService.getCalificacionDetail(this.calificacion_id)
      .subscribe(selectedCalificacion => {
        this.selectedCalificacion = selectedCalificacion;
      });
  }

  ngOnInit() {
    this.showCreate = false;
    this.showView = false;
    this.selectedCalificacion = undefined;
    this.calificacion_id = undefined;
    this.getCalificaciones();
  }
   


}
