import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuntoventaListComponent } from './puntoventa-list/puntoventa-list.component';
import { PuntoventaService } from './puntoventa.service'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { PuntoventaDetailComponent } from './puntoventa-detail/puntoventa-detail.component';
import { PuntoventaCreateComponent } from './puntoventa-create/puntoventa-create.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [PuntoventaListComponent, PuntoventaDetailComponent, PuntoventaCreateComponent],
  exports:[PuntoventaListComponent, PuntoventaDetailComponent],
  providers:[PuntoventaService]
})
export class PuntoventaModule { }
