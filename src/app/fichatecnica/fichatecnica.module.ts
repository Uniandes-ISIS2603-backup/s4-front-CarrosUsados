import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FichatecnicaService } from './fichatecnica.service';
import { FichatecnicaListComponent } from './fichatecnica-list/fichatecnica-list.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [FichatecnicaListComponent],
  providers: [FichatecnicaService]
})
export class FichatecnicaModule { }
