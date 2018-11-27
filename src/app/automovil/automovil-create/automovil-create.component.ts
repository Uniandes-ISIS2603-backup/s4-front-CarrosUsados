import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { AutomovilService } from '../automovil.service';
import { Automovil } from '../automovil';
import { Fichatecnica } from '../../fichatecnica/fichatecnica';
import { Modelo } from 'src/app/modelo/modelo';
import { ModeloService } from 'src/app/modelo/modelo.service';
import { Puntoventa } from 'src/app/puntoventa/puntoventa';
import { PuntoventaService } from 'src/app/puntoventa/puntoventa.service';

@Component({
  selector: 'app-automovil-create',
  templateUrl: './automovil-create.component.html',
  styleUrls: ['./automovil-create.component.css']
})
export class AutomovilCreateComponent implements OnInit {

  constructor(
    private automovilService: AutomovilService,
    private modeloService: ModeloService,
    private puntoVentaService: PuntoventaService,
    private toastrService: ToastrService
  ) { }

  /**
    * El nuevo Automovil
    */
  automovil: Automovil;


  modelos: Modelo[];

  modelo_id: any;

  puntosVenta: Puntoventa[];

  puntoVenta_id:any;

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

  /**
   * Oculta o muestra los campos para crear una ficha tecnica
   */
  showFichaTecnica: boolean;

  /**
   * Oculta o muestra la opcion para asociar un punto de venta a un automovil
   */
  showPuntoVenta:boolean;

  showCreateFichaTecnica() {
    this.showFichaTecnica = !this.showFichaTecnica;
    if(this.automovil.fichaTecnica == undefined){
      this.automovil.fichaTecnica = new Fichatecnica();
    }else{
      this.automovil.fichaTecnica = undefined;
    }
    
  }

  showCreatePuntoVenta() {
    this.showPuntoVenta = !this.showPuntoVenta;
    if(this.automovil.puntoVenta == undefined){
      this.automovil.puntoVenta = new Puntoventa();
    }else{
      this.automovil.puntoVenta = undefined;
    }
    
  }
  
  /**
 * Crea una ficha técnica
 */
  createAutomovil(): Automovil {


    console.log(this.automovil);
    console.log('ID del punto de venta:'+this.automovil.puntoVenta.id);
    console.log('ID de la variable punto de venta:'+this.puntoVenta_id);
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

  getPuntosVenta(){
    this.puntoVentaService.getPuntos()
        .subscribe(puntosVenta => this.puntosVenta = puntosVenta);

  }

  onPuntosVentaSelected(idPuntoVenta:any){
    console.log("Estoy en puntos venta selected!!!!")
    this.puntoVenta_id =  idPuntoVenta;
    this.automovil.puntoVenta.id = idPuntoVenta;
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
    this.showPuntoVenta = false;
    this.getModelos();
    this.getPuntosVenta();
    this.modelo_id = -1;
    this.puntoVenta_id = -1;
    this.automovil = new Automovil();
    //this.automovil.fichaTecnica = new Fichatecnica();
    this.automovil.fechaAgregacion = new Date();
  }

}
