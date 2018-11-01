import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeloListComponent } from './modelo-list/modelo-list.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ModeloService } from './modelo.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [ModeloListComponent],
  exports: [ModeloListComponent]
})
export class ModeloModule { }
