import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { AutomovilService } from '../automovil.service';
import { Automovil } from '../automovil';
import { Fichatecnica } from '../../fichatecnica/fichatecnica';
import { Modelo } from 'src/app/modelo/modelo';
import { ModeloService } from 'src/app/modelo/modelo.service';

@Component({
  selector: 'app-automovil-create',
  templateUrl: './automovil-create.component.html',
  styleUrls: ['./automovil-create.component.css']
})
export class AutomovilCreateComponent implements OnInit {

  constructor(
    private automovilService: AutomovilService,
    private modeloService: ModeloService,
    private toastrService: ToastrService
  ) { }

  /**
    * El nuevo Automovil
    */
  automovil: Automovil;


  modelos: Modelo[];

  modelo_id: any;

  /**
  * The output which tells the parent component
  * that the user no longer wants to create an Automovil
  */
  @Output() cancel = new EventEmitter();

  /**
  * The output which tells the parent component
  * that the user created a new Automovil
  */
  @Output() create = new EventEmitter();

  showFichaTecnica: boolean;

  showCreateFichaTecnica() {
    this.showFichaTecnica = !this.showFichaTecnica;
  }
  /**
 * Crea una ficha técnica
 */
  createAutomovil(): Automovil {


    console.log(this.automovil);
    this.automovil.fechaAgregacion = new Date();
    this.automovilService.createAutomovil(this.modelo_id, this.automovil)
      .subscribe((automovil) => {
        this.automovil = automovil;
        this.create.emit();
        this.toastrService.success("El automovil fue creado", "Creación del automovil");

      });
    return this.automovil;
  }

  getModelos() {

    this.modeloService.getModelos()
      .subscribe(modelos => this.modelos = modelos);
  }

  onModeloSelected(idModelo: any) {
    this.modelo_id = idModelo;
  }

  /**
  * Emits the signal to tell the parent component that the
  * user no longer wants to create an Automovil
  */
  cancelCreation(): void {
    this.cancel.emit();
  }

  ngOnInit() {
    this.showFichaTecnica = false;
    this.getModelos();
    this.modelo_id = -1;
    this.automovil = new Automovil();
    this.automovil.fichaTecnica = new Fichatecnica();
    this.automovil.fechaAgregacion = new Date();
  }

}
