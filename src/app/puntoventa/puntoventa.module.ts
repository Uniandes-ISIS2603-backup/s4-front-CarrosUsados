import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuntoventaListComponent } from '../Puntoventa/puntoventa-list/puntoventa-list.component';
import {PuntoventaService} from './puntoventa.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [PuntoventaListComponent],
  exports:[PuntoventaListComponent],
  providers:[PuntoventaService],
  bootstrap:[PuntoventaListComponent]
})
export class PuntoventaModule { }
