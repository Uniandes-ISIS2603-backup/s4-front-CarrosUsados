import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { ArticuloService } from '../articulo.service';

import { Articulo } from '../articulo';

@Component({
  selector: 'app-articulo-detail',
  templateUrl: './articulo-detail.component.html',
  styleUrls: ['./articulo-detail.component.css']
})
export class ArticuloDetailComponent implements OnInit {

  constructor(private articuloService: ArticuloService,
        private route: ActivatedRoute,
        private toastrService: ToastrService) { }
       
  articulo: Articulo;
  
  articulo_id: number;
 
    getArticulo(): void {
        this.articuloService.getArticulo(this.articulo_id)
            .subscribe(articulo => {
                this.articulo = articulo;
            }, err => {
                this.toastrService.error(err, "Error");
            });
    }

  ngOnInit() {
        this.articulo = new Articulo();
        this.articulo_id = + this.route.snapshot.paramMap.get('id');
        this.getArticulo();
  }

}
