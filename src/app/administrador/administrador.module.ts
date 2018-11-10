import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorListComponent } from './administrador-list/administrador-list.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AdministradorService } from './administrador.service';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [AdministradorListComponent],
  exports: [AdministradorListComponent],
  providers: [AdministradorService]
})
export class AdministradorModule { }
