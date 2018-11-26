import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
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
  * Muestra o esconde el componente fichatecnica-create-component
  */
 showCreate: boolean;

 showEdit:boolean;
 /**
   * Muestra o esconde el detalle de una a ficha tecnica
   */
  showView: boolean;
 /**
    /**
    * Constructor para el componente
    * @param administradorService El proveedor del servicio administrador
    */
  constructor(private administradorService: AdministradorService, private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService) { }

  onSelected(administrador_id: number):void {
    this.showCreate = false;
    this.showEdit = false;
    this.showView = true;
    this.administrador_id = administrador_id;
    this.selectedAdministrador = new AdministradorDetail();
    this.getAdministradorDetail();

  }
/**
    * Muestra o esconde el componente de crear un cliente
    * 
    * */
   showHideCreate(): void {
    this.showView = false;
    this.showEdit = false;
    this.showCreate = !this.showCreate;
  }
/**
      * Shows or hides the create component
      */
     showHideEdit(administrador_id: number): void {
      if (!this.showEdit || (this.showEdit && administrador_id != this.selectedAdministrador.id)) {
        this.showView = false;
        this.showCreate = false;
        this.showEdit = true;
        this.administrador_id = administrador_id;
        this.selectedAdministrador= new Administrador();
        this.getAdministradorDetail();
      }
      else {
        this.showEdit = false;
        this.showView = true;
      }
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

updateAdministrador(): void {
  this.showEdit = false;
  this.showView = true;
}

  /**
    * Deletes an author
    */
   deleteAdministrador(administradorId): void {
    
                    this.administradorService.deleteAdministrador(administradorId).subscribe(() => {
                        this.toastrService.error("El administrador fue eliminado correctamente", "Administrador eliminado");
                        this.ngOnInit();
                    }, err => {
                        this.toastrService.error(err, "Error");
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
    this.showCreate = false;
    this.showView = false;
    this.showEdit = false;
    this.selectedAdministrador = undefined;
    this.administrador_id = undefined;
    this.getAdministradores();
  }

}