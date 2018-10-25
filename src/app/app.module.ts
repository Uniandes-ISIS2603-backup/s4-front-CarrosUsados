import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarcaModule } from './marca/marca.module';
import { AutomovilModule } from './automovil/automovil.module';
import { ArticuloModule } from './articulo/articulo.module';
import {PuntoventaModule} from './puntoventa/puntoventa.module';
import {CalificacionModule} from './calificacion/calificacion.module';
import { AppRoutingModule } from './routing-module/app-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarcaModule,
    ArticuloModule,
    AutomovilModule,
    PuntoventaModule,
    CalificacionModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
