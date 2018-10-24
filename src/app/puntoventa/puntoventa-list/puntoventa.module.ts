import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuntoventaListComponent } from '../Puntoventa/puntoventa-list/puntoventa-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PuntoventaListComponent],
  exports:[PuntoventaListComponent]
})
export class PuntoventaModule { }
