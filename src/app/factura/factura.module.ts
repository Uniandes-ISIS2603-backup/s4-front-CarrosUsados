import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaListComponent } from './factura-list/factura-list.component';
import { FacturaDetailComponent } from './factura-detail/factura-detail.component';
import { FacturaService } from './factura.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [FacturaListComponent, FacturaDetailComponent],
  exports: [FacturaListComponent, FacturaDetailComponent],
  providers: [FacturaService],
})
export class FacturaModule { }
