import { Component, OnInit } from '@angular/core';
import { Puntoventa } from '../puntoventa';
import { PuntoventaService } from '../puntoventa.service';



@Component({
  selector: 'app-puntoventa-list',
  templateUrl: './puntoventa-list.component.html',
  styleUrls: ['./puntoventa-list.component.css']
})
export class PuntoventaListComponent implements OnInit {

  puntosVenta:Puntoventa[];

  constructor(private puntoVentaService:PuntoventaService) { }


  getPuntosVenta(){
    this.puntoVentaService.getPuntos()
        .subscribe(puntosVenta => this.puntosVenta = puntosVenta);
  }

  ngOnInit() {
    this.getPuntosVenta();
  }

}
