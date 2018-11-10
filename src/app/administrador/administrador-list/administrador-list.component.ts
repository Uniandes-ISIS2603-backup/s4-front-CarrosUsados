import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../administrador.service';
import { Administrador } from '../administrador'
@Component({
  selector: 'app-administrador-list',
  templateUrl: './administrador-list.component.html',
  styleUrls: ['./administrador-list.component.css']
})
export class AdministradorListComponent implements OnInit {

   /**
 * La lista de administradores.
 */
administradores: Administrador[];

    /**
    * Constructor para el componente
    * @param administradorService El proveedor del servicio administrador
    */
  constructor(private administradorService: AdministradorService) { }

  /**
   * Le pregunta al servicio para actualizar los administradores
   */
  getAdministradores() {
    this.administradorService.getAdministradores()
      .subscribe(administradores => this.administradores = administradores);
  }

 /**
   * Instancia el componente solicitando la lista de administradores
   * Este metodo es llamado cuando se crea el componente
   */
  ngOnInit() {
    this.getAdministradores();
  }

}