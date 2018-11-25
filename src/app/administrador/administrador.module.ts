import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorListComponent } from './administrador-list/administrador-list.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AdministradorService } from './administrador.service';
import { AdministradorDetailComponent } from './administrador-detail/administrador-detail.component';
import { AdministradorCreateComponent } from './administrador-create/administrador-create.component';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    PasswordStrengthMeterModule
  ],
  declarations: [AdministradorListComponent, AdministradorDetailComponent, AdministradorCreateComponent],
  exports: [AdministradorListComponent],
  providers: [AdministradorService]
})
export class AdministradorModule { }
