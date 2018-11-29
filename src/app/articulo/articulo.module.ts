import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticuloCreateComponent} from './articulo-create/articulo-create.component';
import { ArticuloListComponent } from './articulo-list/articulo-list.component';
import { ArticuloDetailComponent } from './articulo-detail/articulo-detail.component';
import { ArticuloService } from './articulo.service';
import { FormsModule } from '@angular/forms';
import {NgxPermissionsModule} from 'ngx-permissions';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {ArticuloEditComponent} from './articulo-edit/articulo-edit.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgxPermissionsModule.forRoot()
  ],
  declarations: [ArticuloListComponent, ArticuloCreateComponent, ArticuloDetailComponent, ArticuloEditComponent],
  providers: [ArticuloService],
})
export class ArticuloModule { }
