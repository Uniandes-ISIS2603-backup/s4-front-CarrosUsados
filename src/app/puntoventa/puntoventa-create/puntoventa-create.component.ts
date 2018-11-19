import { Component, OnInit, EventEmitter , Output} from '@angular/core';
import { Puntoventa} from '../puntoventa';
import { ToastrService} from 'ngx-toastr';
import { PuntoventaService } from '../puntoventa.service';


@Component({
  selector: 'app-puntoventa-create',
  templateUrl: './puntoventa-create.component.html',
  styleUrls: ['./puntoventa-create.component.css']
})
export class PuntoventaCreateComponent implements OnInit {

  constructor(
    private puntoventaService: PuntoventaService,
    private toastrService: ToastrService
  ) { }

  puntoventa: Puntoventa;

      /**
    * The output which tells the parent component
    * that the user no longer wants to create puntoventa
    */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user created a new puntoventa
   */
   @Output() create = new EventEmitter();

   /**
    * Crea punto
    */
   createPunto(): Puntoventa {
 
    this.puntoventaService.createPunto(this.puntoventa)
        .subscribe((puntoventa) => {
            this.puntoventa= puntoventa;
            this.create.emit();
            this.toastrService.success("El punto de venta fue creado", "Creación de punto de venta");
        }) ;
    return this.puntoventa;
}

/**
* Emits the signal to tell the parent component that the
* user no longer wants to create an user
*/
cancelCreation(): void {
    this.cancel.emit();
}

/**
* This function will initialize the component
*/
ngOnInit() {
    this.puntoventa = new Puntoventa();
}

}
