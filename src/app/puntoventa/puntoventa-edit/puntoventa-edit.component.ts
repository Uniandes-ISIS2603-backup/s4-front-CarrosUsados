import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Puntoventa } from '../puntoventa';
import { PuntoventaDetail } from '../puntoventa-detail';
 
import { PuntoventaService } from '../puntoventa.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-puntoventa-edit',
  templateUrl: './puntoventa-edit.component.html',
  styleUrls: ['./puntoventa-edit.component.css']
})
export class PuntoventaEditComponent implements OnInit, OnChanges {
 
  @Input() puntoventa: PuntoventaDetail;
  @Output() cancel= new EventEmitter();
  @Output() update= new EventEmitter();


  ngOnChanges(){this.ngOnInit();} 
  

  constructor( private puntoventaService: PuntoventaService, private toastrService: ToastrService ) { }

  editPunto(): void{
    this.puntoventaService.editPunto(this.puntoventa)
    .subscribe(() => {

      this.update.emit();
        this.toastrService.success("La información del punto de venta ha sido actualizada.", "Edición de punto");
    });
  }

  getPunto(): void {
    this.puntoventaService.getPuntoventaDetail(this.puntoventa.id)
        .subscribe(puntoventa => {
            this.puntoventa = puntoventa;
        });
}
  cancelEdition()
  {
    this.cancel.emit();
  }
  ngOnInit() {
    this.puntoventa= new PuntoventaDetail();
    this.getPunto();
  }

}
