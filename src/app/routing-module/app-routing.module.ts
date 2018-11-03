import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { InicioComponent } from '../inicio/inicio.component';
import { IngresarComponent } from '../ingresar/ingresar.component';
import { AutomovilListComponent } from '../automovil/automovil-list/automovil-list.component';
import { PuntoventaListComponent} from '../puntoventa/puntoventa-list/puntoventa-list.component';
import { ArticuloListComponent} from '../articulo/articulo-list/articulo-list.component';
import { ClienteListComponent } from '../cliente/cliente-list/cliente-list.component';
import { MarcaListComponent } from '../marca/marca-list/marca-list.component';
import { ModeloListComponent } from '../modelo/modelo-list/modelo-list.component';

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
      path: 'puntos',
      children: [
          {
              path: 'list',
              component: PuntoventaListComponent
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
            path: 'list',
            component: ClienteListComponent
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
      component: IngresarComponent
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
