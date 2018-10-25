import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { AutomovilListComponent } from '../automovil/automovil-list/automovil-list.component' 
import { ClienteListComponent } from '../cliente/cliente-list/cliente-list.component';

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
    path: 'clientes',
    children: [
        {
            path: 'list',
            component: ClienteListComponent
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
