import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FichatecnicaService } from './fichatecnica.service';
import { FichatecnicaListComponent } from './fichatecnica-list/fichatecnica-list.component';
import { FichatecnicaDetailComponent } from './fichatecnica-detail/fichatecnica-detail.component';
import { FichatecnicaCreateComponent } from './fichatecnica-create/fichatecnica-create.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [FichatecnicaListComponent, FichatecnicaDetailComponent, FichatecnicaCreateComponent],
  providers: [FichatecnicaService]
})
export class FichatecnicaModule { }
