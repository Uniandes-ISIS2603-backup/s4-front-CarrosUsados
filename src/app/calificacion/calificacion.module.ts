import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { CalificacionListComponent } from './calificacion-list/calificacion-list.component';
import { CalificacionDetailComponent } from './calificacion-detail/calificacion-detail.component';
import { CalificacionCreateComponent } from './calificacion-create/calificacion-create.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [  CalificacionListComponent, CalificacionDetailComponent, CalificacionCreateComponent]
})
export class CalificacionModule { }
