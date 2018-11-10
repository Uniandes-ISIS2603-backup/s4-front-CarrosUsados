import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Marca } from '../marca'
import { MarcaService } from '../marca.service';
import { ToastrService } from 'ngx-toastr';
//import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';

@Component({
  selector: 'app-marca-list',
  templateUrl: './marca-list.component.html',
  styleUrls: ['./marca-list.component.css']
})
export class MarcaListComponent implements OnInit {

  constructor(private marcaService:MarcaService,
        private toastrService: ToastrService,
        private viewRef: ViewContainerRef) { }

  marcas:Marca[];
  
  showCreate: boolean;


    edit_editorial_id: number;
  
  getMarcas() {
      this.marcaService.getMarcas()
        .subscribe(marcas => this.marcas = marcas);
  }

    showHideCreate(): void {
        this.showCreate = !this.showCreate!
    }

  ngOnInit() {
      this.getMarcas();
      this.showCreate = false;
  }

}
