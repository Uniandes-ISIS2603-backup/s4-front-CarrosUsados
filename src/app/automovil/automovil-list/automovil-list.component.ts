import { Component, OnInit } from '@angular/core';
import { Automovil } from '../automovil'
import { AutomovilService } from '../automovil.service';

@Component({
  selector: 'app-automovil-list',
  templateUrl: './automovil-list.component.html',
  styleUrls: ['./automovil-list.component.css']
})
export class AutomovilListComponent implements OnInit {

  
  /**
   * Constructor para el componente
   * @param automovilService El proveedor del servicio automovil
   */
  constructor(private automovilService:AutomovilService) { }

  /**
   * La lista de automoviles
   */
  automoviles:Automovil[];

  /**
   * Le pregunta al servicio para actualizar los automoviles
   */
  getAutomoviles(){
    this.automovilService.getAutomoviles()
        .subscribe(automoviles => this.automoviles = automoviles);
  }
  /**
   * Instancia el componente solicitando la lista de automoviles
   * Este metodo es llamado cuando se crea el componente
   */
  ngOnInit() {
    this.getAutomoviles();
  }

}
