import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Modelo } from '../modelo'
import { Marca } from 'src/app/marca/marca'
import { ModeloService } from '../modelo.service';
import { MarcaService } from 'src/app/marca/marca.service';
import { ToastrService } from 'ngx-toastr';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';

@Component({
  selector: 'app-modelo-list',
  templateUrl: './modelo-list.component.html',
  styleUrls: ['./modelo-list.component.css']
})
export class ModeloListComponent implements OnInit {

  constructor(private modeloService:ModeloService,
  private marcaService:MarcaService,
        private toastrService: ToastrService,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef) { }
  
  modelos:Modelo[];
   marcas: Marca[];
  
  showCreate: boolean;
  showEdit: boolean;
  public searchString: string;
  
  edit_modelo_id: number;
  
  getModelos() {
      this.modeloService.getModelos()
        .subscribe(modelos => this.modelos = modelos);
  }
      showHideCreate(): void {
        this.showCreate = !this.showCreate!
    }
    
            showEditModelo(id): void {
        if (this.showCreate) {
            this.showCreate = false;
        }
        this.showEdit = true;
        this.edit_modelo_id = id;
    }
        hideEditModelo(): void {
        this.showEdit = false;
        this.edit_modelo_id = undefined;
    }

        deleteModelo(modeloId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Eliminar un Modelo',
            childComponent: SimpleModalComponent,
            data: { text: 'Esta seguro de eliminar esta Marca y todos sus Automoviles de Tu Nave?' },
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.modeloService.deleteModelo(modeloId).subscribe(automoviles => {
                            this.toastrService.error("La marca y todos sus modelos fueron eliminados", "Marca deleted");
                            this.ngOnInit();
                        }, err => {
                            //this.toastrService.error(err, "Error");
                        });
                        return true;
                    }
                },
                { text: 'No', onAction: () => true }
            ]
        });
        }
        
        
  getMarcas() {

    this.marcaService.getMarcas()
      .subscribe(marcas => this.marcas = marcas);
  }

  ngOnInit() {
      this.getModelos();
      this.showCreate = false;
       this.showEdit = false;
       this.getMarcas();
  }

}
