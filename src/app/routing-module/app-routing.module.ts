import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { AutomovilListComponent } from '../automovil/automovil-list/automovil-list.component' 
import {PuntoventaListComponent} from '../puntoventa/puntoventa-list/puntoventa-list.component'

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
