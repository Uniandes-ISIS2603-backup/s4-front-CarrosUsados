import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';
import { InicioComponent } from '../inicio/inicio.component';
import { IngresarComponent } from '../ingresar/ingresar.component';
import { AutomovilListComponent } from '../automovil/automovil-list/automovil-list.component';
import { PuntoventaListComponent} from '../puntoventa/puntoventa-list/puntoventa-list.component';
import { ArticuloListComponent} from '../articulo/articulo-list/articulo-list.component';
import { ClienteListComponent } from '../cliente/cliente-list/cliente-list.component';
import { MarcaListComponent } from '../marca/marca-list/marca-list.component';
import { ModeloListComponent } from '../modelo/modelo-list/modelo-list.component';
import { FichatecnicaListComponent } from '../fichatecnica/fichatecnica-list/fichatecnica-list.component';
import { FichatecnicaDetailComponent } from '../fichatecnica/fichatecnica-detail/fichatecnica-detail.component';
import { AdministradorListComponent} from '../administrador/administrador-list/administrador-list.component'
import { AdministradorDetailComponent } from '../administrador/administrador-detail/administrador-detail.component';
import { ClienteDetailComponent } from '../cliente/cliente-detail/cliente-detail.component';
import { PuntoventaDetail } from '../puntoventa/puntoventa-detail';
import { PuntoventaCreateComponent } from '../puntoventa/puntoventa-create/puntoventa-create.component';
import { CalificacionCreateComponent } from '../calificacion/calificacion-create/calificacion-create.component';
import { CalificacionDetail } from '../calificacion/calificacion-detail';
import { CalificacionListComponent } from '../calificacion/calificacion-list/calificacion-list.component';
import { PuntoventaEditComponent } from '../puntoventa/puntoventa-edit/puntoventa-edit.component';
import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AdministradorCreateComponent } from '../administrador/administrador-create/administrador-create.component';
import { ClienteCreateComponent } from '../cliente/cliente-create/cliente-create.component';

const routes: Routes = [
    
  {
      path: 'automoviles',
      children: [
          {
              path: 'list',
              component: AutomovilListComponent
          }
      ]
  },
  {
    path: 'fichastecnicas',
    children: [
        {
            path: 'list',
            component: FichatecnicaListComponent
        },
        {
            path: ':id',
            component: FichatecnicaDetailComponent
        }
    ]
},
  {
      path: 'puntos',
      children: [
          {
              path: 'list',
              component: PuntoventaListComponent
          },
          {
              path:':id',
              component: PuntoventaDetail
          },
          {
              path:'create',
              component: PuntoventaCreateComponent
          },
          {
            path: ':id/edit',
            component: PuntoventaEditComponent,
         
          },
          {
            path: ':id/delete',
            component: PuntoventaEditComponent,
          
          }
      ]
  },
  {
    path: 'calificaciones',
    children: [
        {
            path: 'list',
            component: CalificacionListComponent
        },
        {
            path:':id',
            component: CalificacionDetail
        },
        {
            path:'create',
            component: CalificacionCreateComponent
        }
    ]
},
  {
      path: 'articulos',
      children: [
          {
              path: 'list',
              component: ArticuloListComponent
          }
      ]
  },
  {
    path: 'clientes',
    children: [
        {
            path: 'registrar',
            component: ClienteCreateComponent
        },
        {
            path: 'list',
            component: ClienteListComponent
        },
        {
            path: ':id',
            component: ClienteDetailComponent
        }
       
    ]
},
{
    path: 'administradores',
    children: [
        {
            path: 'registrar',
            component: AdministradorCreateComponent
        },
            {        
            path: 'list',
            component: AdministradorListComponent
    }
    ,
        {
            path: ':id',
            component: AdministradorDetailComponent
        }
        
    ]
},
{
    path: 'marcas',
    children: [
        {
            path: 'list',
            component: MarcaListComponent
        }
    ]
},
{
    path: 'modelos',
    children: [
        {
            path: 'list',
            component: ModeloListComponent
        }
    ]
},
{
      path: 'inicio',
      component: InicioComponent
},
{
      path: 'ingresar',
      component: AuthLoginComponent
}   
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
