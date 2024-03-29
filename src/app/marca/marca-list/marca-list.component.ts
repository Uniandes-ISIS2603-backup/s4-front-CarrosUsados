import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Marca } from '../marca'
import { MarcaService } from '../marca.service';
import { ToastrService } from 'ngx-toastr';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';


@Component({
  selector: 'app-marca-list',
  templateUrl: './marca-list.component.html',
  styleUrls: ['./marca-list.component.css']
})
export class MarcaListComponent implements OnInit {

  constructor(private marcaService:MarcaService,
        private toastrService: ToastrService,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef) { }

  marcas:Marca[];
  
  showCreate: boolean;
   showEdit: boolean;
  public searchString: string;

    edit_marca_id: number;
  
  getMarcas() {
      this.marcaService.getMarcas()
        .subscribe(marcas => this.marcas = marcas);
  }

    showHideCreate(): void {
        if (this.showEdit) {
            this.showEdit = false;
        }
        this.showCreate = !this.showCreate!
    }
    
        showEditMarca(id): void {
        if (this.showCreate) {
            this.showCreate = false;
        }
        this.showEdit = true;
        this.edit_marca_id = id;
    }
        hideEditMarca(): void {
        this.showEdit = false;
        this.edit_marca_id = undefined;
    }
    
        deleteMarca(marcaId): void {
    this.marcaService.deleteMarca(marcaId).subscribe(() => {
      this.toastrService.success("La marca fue eliminado correctamente.", "Marca eliminado.");
      this.ngOnInit();
    }, err => {
      this.toastrService.error(err, "Error");
    });
    }

  ngOnInit() {
      
      this.showCreate = false;
       this.showEdit = false;
       this.getMarcas();
  }

}
