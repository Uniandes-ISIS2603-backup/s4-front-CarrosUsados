import { Component, OnInit } from '@angular/core';
import { Articulo } from '../articulo'
import { ArticuloService } from '../articulo.service';


@Component({
  selector: 'app-articulo-list',
  templateUrl: './articulo-list.component.html',
  styleUrls: ['./articulo-list.component.css']
})
export class ArticuloListComponent implements OnInit {

  articulos:Articulo[];
  showCreate: boolean;

  constructor(private articuloService:ArticuloService) { }
  
  ngOnInit() {
    this.getArticulos();
    this.showCreate = false;
  }

  getArticulos(){
      this.articuloService.getArticulos()
        .subscribe(articulos => this.articulos = articulos);
  }
  
  showHideCreate(): void {
        this.showCreate = !this.showCreate!
    }

}
