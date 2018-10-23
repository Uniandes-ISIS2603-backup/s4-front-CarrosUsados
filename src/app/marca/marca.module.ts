import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcaListComponent } from './marca-list/marca-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MarcaListComponent],
  exports: [MarcaListComponent]
})
export class MarcaModule { }
