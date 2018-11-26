import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeloListComponent } from './modelo-list/modelo-list.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ModeloService } from './modelo.service';
import { ModeloCreateComponent } from './modelo-create/modelo-create.component';
import { ModeloDetailComponent } from './modelo-detail/modelo-detail.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ModeloEditComponent } from './modelo-edit/modelo-edit.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [ModeloListComponent, ModeloCreateComponent, ModeloDetailComponent, FilterPipe, ModeloEditComponent],
  exports: [ModeloListComponent, FilterPipe],
  providers: [ModeloService]
})
export class ModeloModule { }
