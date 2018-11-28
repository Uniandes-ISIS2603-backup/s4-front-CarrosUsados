import { Component, OnInit, ViewContainerRef} from '@angular/core';
import { Puntoventa } from '../puntoventa';
import { PuntoventaService } from '../puntoventa.service';
import {PuntoventaDetail} from '../puntoventa-detail';
import { ToastrService } from 'ngx-toastr';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import { CompileShallowModuleMetadata } from '@angular/compiler';



@Component({
  selector: 'app-puntoventa-list',
  templateUrl: './puntoventa-list.component.html',
  styleUrls: ['./puntoventa-list.component.css']
})
export class PuntoventaListComponent implements OnInit {

     /**
    * The page (controls pagination)
    */
   page: number;
  count:number;
  /**todos los puntos de venta existentes */
  puntosVenta:Puntoventa[];

 /**id del punto de venta que usuairo quiere ver*/
  puntoventa_id:number;
   
/*constructor del componente.
*/
  constructor(
    private puntoVentaService:PuntoventaService, private toastrService: ToastrService,     private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef) { }


  /**variable para visibilidad de la creación */
  showCreate: boolean;

  /**variable para visibilidad de la edición */
  showEdit:boolean;

  /*variable para visibilidad de la vista*/
  showView: boolean;

/**variable para seleccionar un punto de venta */
  selectedPuntoventa: Puntoventa ;

  edit_punto_id: number;

  /** muestra el detalle del punto seleccionado*/
  onSelected(puntoventa_id: number): void {
    this.showCreate = false;
    this.showView = true;
    // this.showEdit= false;
    this.puntoventa_id = puntoventa_id;
    // console.log(this.puntoventa_id);
    this.selectedPuntoventa = new PuntoventaDetail();
    this.getPuntoventaDetail();

  }

   /*muestra o esconde create*/  
  showHideCreate(): void {
    this.showView = false;
    this.showEdit= false;
    this.showCreate = !this.showCreate;
  }

  /**
      * Shows or hides the create component
      */
  showHideEdit(puntoventa_id: number): void {
    // console.log(puntoventa_id);
    if (!this.showEdit || (this.showEdit && puntoventa_id != this.selectedPuntoventa.id)) {
      this.showView = false;
      this.showCreate = false;
      this.showEdit = true;
      this.puntoventa_id = puntoventa_id;
      this.selectedPuntoventa= new Puntoventa();
      // this.selectedPuntoventa.calificaciones= new Array();
      this.getPuntoventaDetail();
    }
    else {
      this.showEdit = false;
      this.showView= true;
    
    }}

    updatePunto(): void {
      this.showEdit= false;
      this.showView= true;
    }

    /*obtiene todos los puntos de venta*/
  getPuntosventa(){
    this.puntoVentaService.getPuntos()
        .subscribe(puntosventa=> this.puntosVenta = puntosventa);
  }

 /*detalle de seleccionado
 */
  getPuntoventaDetail(): void {
    console.log(this.puntoventa_id);
    this.puntoVentaService.getPuntoventaDetail(this.puntoventa_id)
      .subscribe(ans => {this.selectedPuntoventa = ans
      console.log(ans);
      console.log(this.count++);
    });
  }
  /**elimina un punto de venta */
  deletePunto(puntoId): void {
     
                    this.puntoVentaService.deletePunto(puntoId).subscribe(() => {
                        this.toastrService.error("El punto de venta fue eliminado correctamente.", "Punto eliminado.");
                        this.ngOnInit();
                    }, err => {
                        this.toastrService.error(err, "Error");
                    });
                   // return true;
       
}


  /* cuando el componente sea creado
  */
  ngOnInit() {
    this.showCreate = false;
    this.showView = false;
    this.showEdit= false;
    this.selectedPuntoventa = undefined;
    this.puntoventa_id = undefined;
    this.getPuntosventa();
     
  }
   
   

  
}
