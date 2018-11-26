import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Puntoventa } from '../puntoventa';
import { PuntoventaDetail } from '../puntoventa-detail';
 
import { PuntoventaService } from '../puntoventa.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-puntoventa-edit',
  templateUrl: './puntoventa-edit.component.html',
  styleUrls: ['./puntoventa-edit.component.css']
})
export class PuntoventaEditComponent implements OnInit, OnChanges {
 
    @Input() puntoventa: PuntoventaDetail;
    punto_id: number;
  @Output() cancel= new EventEmitter();
  @Output() update= new EventEmitter();


  ngOnChanges(){this.ngOnInit();} 
  

  constructor( private puntoventaService: PuntoventaService, private toastrService: ToastrService ,  private router: Router,
    private route: ActivatedRoute) { }

  updatePunto(): void{
    this.puntoventaService.updatePunto(this.puntoventa)
    .subscribe(() => {

      this.toastrService.success("La información del punto de venta ha sido actualizada.", "Edición de punto");
    });
    this.update.emit();
  }

  getPunto(): void {
    this.puntoventaService.getPuntoventaDetail(this.punto_id)
        .subscribe(puntoventa => {
            this.puntoventa = puntoventa;
        });
}
  cancelEdition()
  {
    this.cancel.emit();
  }
  ngOnInit() {
    // this.punto_id = +this.route.snapshot.paramMap.get('id');
    this.getPunto();
  }

}
