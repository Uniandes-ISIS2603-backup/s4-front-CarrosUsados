import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';
import { Articulo } from '../articulo'
import { ArticuloService } from '../articulo.service';


@Component({
  selector: 'app-articulo-list',
  templateUrl: './articulo-list.component.html',
  styleUrls: ['./articulo-list.component.css']
})
export class ArticuloListComponent implements OnInit {

  /**
   * Lista de articulos de las que se va a escoger
   */
  articulos:Articulo[];
  /**
   * Muestra o esconde el create de un articulo
   */
  showCreate: boolean;
  /**
   * Muestra o esconde el detalle de un articulo
   */
  showView: boolean;
  /**
   * Muestra o esconde el componente automovil-edit-component
   */
  showEdit: boolean;
  /**
   * El automovil seleccionado
   */
  selectArticulo: Articulo;
  /**
   * El id del articulo
   */
  articuloId: number;

  constructor(private articuloService:ArticuloService,
              private modalDialogService: ModalDialogService,
              private viewRef: ViewContainerRef,
              private toastrService: ToastrService) { }
  
  onSelected(articuloId: number): void {
    this.showCreate = false;
    //this.showEdit = false;
    this.showView = true;
    this.articuloId = articuloId;
    this.selectArticulo = new Articulo();
    this.getArticulo();
  }
  
  ngOnInit() {
    this.getArticulos();
    this.showCreate = false;
    this.showView = false;
    this.showEdit = false;
    this.showCreate = !this.showCreate;
    this.selectArticulo = undefined;
    this.articuloId = undefined;
  }

  getArticulos(){
      this.articuloService.getArticulos()
        .subscribe(articulos => this.articulos = articulos);
  }
  
  getArticulo(): void {
    this.articuloService.getArticulo(this.articuloId)
      .subscribe(selectArticulo => {
        this.selectArticulo = selectArticulo;
      });
  }
  
  showHideCreate(): void {
        if (this.showEdit) {
            this.showEdit = false;
        }
        this.showCreate = !this.showCreate!
    }
   /**
      * Shows or hides the create component
      */
  showHideEdit(articuloId: number): void {
    if (!this.showEdit || (this.showEdit && articuloId != this.selectArticulo.id)) {
      this.showView = false;
      this.showCreate = false;
      this.showEdit = true;
      this.articuloId = articuloId;
      this.selectArticulo = new Articulo();
      this.getArticulo();
    }
    else {
      this.showEdit = false;
      this.showView = true;
    }
  } 
   
   updateArticulo(): void {
    this.showEdit = false;
    this.showView = true;
  }
  
  /**
    * Borra un articulo
    */
    deleteArticulo(articuloId): void {
    this.articuloService.deleteArticulo(articuloId).subscribe(() => {
      this.toastrService.success("El articulo fue eliminado correctamente.", "Articulo eliminado.");
      this.ngOnInit();
    }, err => {
      this.toastrService.error(err, "Error");
    });
    }
   

}
