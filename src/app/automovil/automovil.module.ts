import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutomovilListComponent } from './automovil-list/automovil-list.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {NgxPermissionsModule} from 'ngx-permissions';
import { AutomovilService } from './automovil.service';
import { AutomovilDetailComponent } from './automovil-detail/automovil-detail.component';
import { AutomovilCreateComponent } from './automovil-create/automovil-create.component';
import { ModeloService } from '../modelo/modelo.service';
import { AutomovilEditComponent } from './automovil-edit/automovil-edit.component';
import { AutomovilAgregarcalificacionComponent } from './automovil-agregarcalificacion/automovil-agregarcalificacion.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgxPermissionsModule.forRoot()
  ],
  declarations: [AutomovilListComponent, AutomovilDetailComponent, AutomovilCreateComponent, AutomovilEditComponent, AutomovilAgregarcalificacionComponent],
  providers: [AutomovilService, ModeloService]
})
export class AutomovilModule { }
