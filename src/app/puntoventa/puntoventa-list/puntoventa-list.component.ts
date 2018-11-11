import { Component, OnInit } from '@angular/core';
import { Puntoventa } from '../puntoventa';
import { PuntoventaService } from '../puntoventa.service';
import {PuntoventaDetail} from '../puntoventa-detail';



@Component({
  selector: 'app-puntoventa-list',
  templateUrl: './puntoventa-list.component.html',
  styleUrls: ['./puntoventa-list.component.css']
})
export class PuntoventaListComponent implements OnInit {

  puntosVenta:Puntoventa[];

  puntoventa_id:number;

  constructor(private puntoVentaService:PuntoventaService) { }

  showCreate: boolean;

  showEdit:boolean;

  /**
   * Muestra o esconde el detalle de una a ficha tecnica
   */
  showView: boolean;

  selectedPuntoventa: Puntoventa ;

  onSelected(puntoventa_id: number): void {
    this.showCreate = false;
    this.showView = true;
    this.puntoventa_id = puntoventa_id;
    this.selectedPuntoventa = new PuntoventaDetail();
    this.getPuntoventaDetail();

  }

   
  showHideCreate(): void {
    this.showView = false;
    this.showCreate = !this.showCreate;
  }

  /**
      * Shows or hides the create component
      */
  showHideEdit(Puntoventa_id: number): void {
    if (!this.showEdit || (this.showEdit && this.puntoventa_id != this.selectedPuntoventa.id)) {
      this.showView = false;
      this.showCreate = false;
      this.showEdit = true;
      this.puntoventa_id = Puntoventa_id;
      this.selectedPuntoventa= new Puntoventa();
      this.getPuntoventaDetail();
    }
    else {
      this.showEdit = false;
      this.showView = true;
    }}
  getPuntosventa(){
    this.puntoVentaService.getPuntos()
        .subscribe(puntosventa=> this.puntosVenta = puntosventa);
  }

  getPuntoventaDetail(): void {
    this.puntoVentaService.getPuntoventaDetail(this.puntoventa_id)
      .subscribe(selectedPuntoventa => {
        this.selectedPuntoventa = selectedPuntoventa;
      });
  }

  ngOnInit() {
    this.showCreate = false;
    this.showView = false;
    this.selectedPuntoventa = undefined;
    this.puntoventa_id = undefined;
    this.getPuntosventa();
  }
   
   

  
}
