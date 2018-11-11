import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Modelo } from '../modelo'
import { ModeloService } from '../modelo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modelo-list',
  templateUrl: './modelo-list.component.html',
  styleUrls: ['./modelo-list.component.css']
})
export class ModeloListComponent implements OnInit {

  constructor(private modeloService:ModeloService,
        private toastrService: ToastrService,
        private viewRef: ViewContainerRef) { }
  
  modelos:Modelo[];
  
  showCreate: boolean;
  
   edit_modelo_id: number;
  
  getModelos() {
      this.modeloService.getModelos()
        .subscribe(modelos => this.modelos = modelos);
  }
      showHideCreate(): void {
        this.showCreate = !this.showCreate!
    }

  ngOnInit() {
      this.getModelos();
      this.showCreate = false;
  }

}
