import { Component, OnInit } from '@angular/core';
import { Modelo } from '../modelo'
import { ModeloService } from '../modelo.service';

@Component({
  selector: 'app-modelo-list',
  templateUrl: './modelo-list.component.html',
  styleUrls: ['./modelo-list.component.css']
})
export class ModeloListComponent implements OnInit {

  constructor(private modeloService:ModeloService) { }
  
  modelos:Modelo[];
  
  getModelos() {
      this.modeloService.getModelos()
        .subscribe(modelos => this.modelos = modelos);
  }

  ngOnInit() {
      this.getModelos();
  }

}
