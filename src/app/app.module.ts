import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioModule} from './inicio/inicio.module';
import { RegistroModule } from './registro/registro.module';
import { IngresarModule } from './ingresar/ingresar.module';
import { MarcaModule } from './marca/marca.module';
import { ModeloModule } from './modelo/modelo.module';
import { AutomovilModule } from './automovil/automovil.module';
import { ArticuloModule } from './articulo/articulo.module';
import {PuntoventaModule} from './puntoventa/puntoventa.module';
import {CalificacionModule} from './calificacion/calificacion.module';
import {ClienteModule} from './cliente/cliente.module';
import {AdministradorModule} from './administrador/administrador.module';
import { AppRoutingModule } from './routing-module/app-routing.module';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './interceptors/httperrorinterceptor.service';
import { FichatecnicaModule } from './fichatecnica/fichatecnica.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarcaModule,
    ArticuloModule,
    AutomovilModule,
    FichatecnicaModule,
    PuntoventaModule,
    CalificacionModule,
    ClienteModule,
    ModeloModule,
    FormsModule,
    ToastrModule.forRoot(),
    IngresarModule,
    InicioModule,
    RegistroModule,
    AdministradorModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
