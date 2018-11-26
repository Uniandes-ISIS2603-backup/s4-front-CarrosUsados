import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

<<<<<<< HEAD
import { NgxPermissionsModule } from 'ngx-permissions';
=======
import {NgxPermissionsModule} from 'ngx-permissions';

import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

>>>>>>> d16cf1ae032af5d7d7bf9c508702c5cda73c0c93
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
import { ModalDialogModule } from 'ngx-modal-dialog';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './interceptors/httperrorinterceptor.service';
import { FichatecnicaModule } from './fichatecnica/fichatecnica.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthLoginComponent } from './auth/auth-login/auth-login.component';
import { AuthModule } from './auth/auth.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPermissionsModule,
    NgxPaginationModule,
    NgbModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
  }),
   ModalDialogModule.forRoot(),
    MarcaModule,
    ArticuloModule,
    AutomovilModule,
    FichatecnicaModule,
    PuntoventaModule,
    CalificacionModule,
    ClienteModule,
    ModeloModule,
    FormsModule,
    IngresarModule,
    InicioModule,
    RegistroModule,
    AdministradorModule,
<<<<<<< HEAD
    NgxPermissionsModule.forRoot()
=======
    AuthModule
>>>>>>> d16cf1ae032af5d7d7bf9c508702c5cda73c0c93
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
