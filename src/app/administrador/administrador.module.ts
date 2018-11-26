import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';
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
import { AdministradorEditComponent } from './administrador-edit/administrador-edit.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    PasswordStrengthMeterModule,
    NgbModule,
    NgxPermissionsModule.forRoot()
  ],
  declarations: [AdministradorListComponent, AdministradorDetailComponent, AdministradorCreateComponent, AdministradorEditComponent],
  exports: [AdministradorListComponent],
  providers: [AdministradorService]
})
export class AdministradorModule { }
