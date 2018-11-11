import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutomovilListComponent } from './automovil-list/automovil-list.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AutomovilService } from './automovil.service';
import { AutomovilDetailComponent } from './automovil-detail/automovil-detail.component';
import { AutomovilCreateComponent } from './automovil-create/automovil-create.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [AutomovilListComponent, AutomovilDetailComponent, AutomovilCreateComponent],
  providers: [AutomovilService]
})
export class AutomovilModule { }
