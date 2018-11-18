import { Component, OnInit } from '@angular/core';

import { Automovil } from '../automovil'
import { AutomovilService } from '../automovil.service';
import { AutomovilDetail } from '../automovil-detail';
import { Modelo } from 'src/app/modelo/modelo';
import { ModeloService } from 'src/app/modelo/modelo.service';

@Component({
  selector: 'app-automovil-list',
  templateUrl: './automovil-list.component.html',
  styleUrls: ['./automovil-list.component.css']
})
export class AutomovilListComponent implements OnInit {


  /**
   * Constructor para el componente
   * @param automovilService El proveedor del servicio automovil
   */
  constructor(private automovilService: AutomovilService, private modeloService: ModeloService) { }

  /**
   * La lista de automoviles
   */
  automoviles: Automovil[];

  automovil_id: number;



  modelos: Modelo[];

  modelo_id:any;


  /**
  * Muestra o esconde el componente automovil-create-component
  */
  showCreate: boolean;

  showEdit: boolean;

  /**
   * Muestra o esconde el detalle de un automovil
   */
  showView: boolean;

  selectedAutomovil: Automovil;

  onSelected(automovil_id: number): void {
    this.showCreate = false;
    this.showView = true;
    this.automovil_id = automovil_id;
    this.selectedAutomovil = new AutomovilDetail();
    this.getAutomovilDetail();

  }

  onModeloSelected(idModelo:any){
    this.modelo_id = idModelo;
    this.getAutomovilesOfModelo(idModelo);
  }

  /**
    * Muestra o esconde el componente de crear un automovil
    */
  showHideCreate(): void {
    this.showView = false;
    this.showCreate = !this.showCreate;
  }

  /**
      * Shows or hides the create component
      */
  showHideEdit(automovil_id: number): void {
    if (!this.showEdit || (this.showEdit && automovil_id != this.selectedAutomovil.id)) {
      this.showView = false;
      this.showCreate = false;
      this.showEdit = true;
      this.automovil_id = automovil_id;
      this.selectedAutomovil = new Automovil();
      this.getAutomovilDetail()
    }
    else {
      this.showEdit = false;
      this.showView = true;
    }
  }

  getModelos() {

    this.modeloService.getModelos()
      .subscribe(modelos => this.modelos = modelos);
  }

  /**
   * Le pregunta al servicio para actualizar los automoviles
   */
  getAutomoviles() {
    this.automovilService.getAutomoviles()
      .subscribe(automoviles => this.automoviles = automoviles);
  }

  /**
   * Le pregunta al servicio para actualizar los automoviles
   */
  getAutomovilesOfModelo(modeloId:any) {
    this.automovilService.getAutomovilesOfModelo(modeloId)
      .subscribe(automoviles => this.automoviles = automoviles);
  }

  getAutomovilDetail(): void {
    this.automovilService.getAutomovilDetail(this.modelo_id,this.automovil_id)
      .subscribe(selectedAutomovil => {
        this.selectedAutomovil = selectedAutomovil;
      });
  }
  /**
   * Instancia el componente solicitando la lista de automoviles
   * Este metodo es llamado cuando se crea el componente
   */
  ngOnInit() {
    this.showCreate = false;
    this.showView = false;
    this.selectedAutomovil = undefined;
    this.automovil_id = undefined;

    this.getModelos();
    
    this.modelo_id = -1;
    //this.getAutomovilesOfModelo(this.modelo_id);
  }

}
