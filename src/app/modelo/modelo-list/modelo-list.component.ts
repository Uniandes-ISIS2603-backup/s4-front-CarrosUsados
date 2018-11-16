import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Modelo } from '../modelo'
import { Marca } from 'src/app/marca/marca'
import { ModeloService } from '../modelo.service';
import { MarcaService } from 'src/app/marca/marca.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modelo-list',
  templateUrl: './modelo-list.component.html',
  styleUrls: ['./modelo-list.component.css']
})
export class ModeloListComponent implements OnInit {

  constructor(private modeloService:ModeloService,
  private marcaService:MarcaService,
        private toastrService: ToastrService,
        private viewRef: ViewContainerRef) { }
  
  modelos:Modelo[];
   marcas: Marca[];
  
  showCreate: boolean;
  public searchString: string;
  
   edit_modelo_id: number;
  
  getModelos() {
      this.modeloService.getModelos()
        .subscribe(modelos => this.modelos = modelos);
  }
      showHideCreate(): void {
        this.showCreate = !this.showCreate!
    }

  getMarcas() {

    this.marcaService.getMarcas()
      .subscribe(marcas => this.marcas = marcas);
  }

  ngOnInit() {
      this.getModelos();
      this.showCreate = false;
  }

}
