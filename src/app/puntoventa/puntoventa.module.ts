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
import { PuntoventaEditComponent } from './puntoventa-edit/puntoventa-edit.component';
import {NgxPermissionsModule} from 'ngx-permissions';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PuntoventaCalificacionesComponent } from './puntoventa-calificaciones/puntoventa-calificaciones.component';
import { PuntoventaAddCalificacionComponent } from './puntoventa-add-calificacion/puntoventa-add-calificacion.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPermissionsModule,
    NgbModule
  ],
  declarations: [PuntoventaListComponent, PuntoventaDetailComponent, PuntoventaCreateComponent,FilterPipe, PuntoventaEditComponent, PuntoventaCalificacionesComponent, PuntoventaAddCalificacionComponent],
  exports:[PuntoventaListComponent, PuntoventaDetailComponent,FilterPipe],
  providers:[PuntoventaService]
})
export class PuntoventaModule { }
