import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcaListComponent } from './marca-list/marca-list.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MarcaService } from './marca.service';
import { MarcaCreateComponent } from './marca-create/marca-create.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [MarcaListComponent, MarcaCreateComponent, MarcaCreateComponent],
  exports: [MarcaListComponent],
  providers: [MarcaService]
})
export class MarcaModule { }
