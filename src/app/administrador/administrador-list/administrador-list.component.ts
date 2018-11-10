import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../administrador.service';
import { Administrador } from '../administrador'
import { AdministradorDetail } from '../administrador-detail';
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
administrador_id:number;
selectedAdministrador:Administrador;

    /**
    * Constructor para el componente
    * @param administradorService El proveedor del servicio administrador
    */
  constructor(private administradorService: AdministradorService) { }

  onSelected(administrador_id: number):void {
    this.administrador_id = administrador_id;
    this.selectedAdministrador = new AdministradorDetail();
    this.getAdministradorDetail();

  }

  /**
   * Le pregunta al servicio para actualizar los administradores
   */
  getAdministradores() {
    this.administradorService.getAdministradores()
      .subscribe(administradores => this.administradores = administradores);
  }

  getAdministradorDetail(): void {
    this.administradorService.getAdministradorDetail(this.administrador_id)
        .subscribe(selectedAdministrador => {
            this.selectedAdministrador = selectedAdministrador;
        });
}

  parseDate( date:String) : Date
  {
    return new Date (Date.parse(date.substring(0,date.length-5)));
  }

 /**
   * Instancia el componente solicitando la lista de administradores
   * Este metodo es llamado cuando se crea el componente
   */
  ngOnInit() {
    this.getAdministradores();
  }

}