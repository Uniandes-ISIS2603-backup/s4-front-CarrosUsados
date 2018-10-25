import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { AutomovilListComponent } from '../automovil/automovil-list/automovil-list.component' 
import {PuntoventaListComponent} from '../puntoventa/puntoventa-list/puntoventa-list.component'
import {ArticuloListComponent} from '../articulo/articulo-list/articulo-list.component'

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
