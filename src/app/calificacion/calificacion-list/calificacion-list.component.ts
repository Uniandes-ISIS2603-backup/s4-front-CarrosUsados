import { Component, OnInit } from '@angular/core';
import { Calificacion } from '../calificacion';
import { CalificacionService } from '../calificacion.service';

@Component({
  selector: 'app-calificacion-list',
  templateUrl: './calificacion-list.component.html',
  styleUrls: ['./calificacion-list.component.css']
})
export class CalificacionListComponent implements OnInit {

  calificaciones:Calificacion[];

  constructor(private calificacionService:CalificacionService) { }


  getCalificaciones(){
    this.calificacionService.getCalificaciones()
        .subscribe(calificaciones=> this.calificaciones = calificaciones);
  }

  ngOnInit() {
    this.getCalificaciones();
  }


}
