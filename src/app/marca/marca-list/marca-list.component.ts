import { Component, OnInit } from '@angular/core';
import { Marca } from '../marca'
import { MarcaService } from '../marca.service';

@Component({
  selector: 'app-marca-list',
  templateUrl: './marca-list.component.html',
  styleUrls: ['./marca-list.component.css']
})
export class MarcaListComponent implements OnInit {

  constructor(private marcaService:MarcaService) { }

  marcas:Marca[];
  
  getMarcas() {
      this.marcaService.getMarcas()
        .subscribe(marcas => this.marcas = marcas);
  }

  ngOnInit() {
      this.getMarcas();
  }

}
