import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Articulo } from './articulo'
import { Automovil } from '../automovil/automovil';
import { Factura } from '../factura/factura';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const factura = "/factura"
const automovil = '/automovil';
const articulos = '/articulos';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(private http:HttpClient) { }

  getArticulos():Observable<Articulo[]>{
      return this.http.get<Articulo[]>(environment.apiURL + articulos);
  }
  
  getArticulo(articuloId): Observable<Articulo> {
        return this.http.get<Articulo>(environment.apiURL + articulos + '/' + articuloId);
    }
    
    getAutomovilDeArticulo(articuloId): Observable<Automovil> {
        return this.http.get<Automovil>(environment.apiURL + articulos + '/' + articuloId + automovil);
    }
    
    getFacturaDeArticulo(articuloId): Observable<Factura> {
        return this.http.get<Factura>(environment.apiURL + articulos + '/' + articuloId + factura);
    }
  
   /**
    * Crea un articulo
    * @param articulo El nuevo articulo
    * @returns El nuevo articulo con la nueva id
    */
    createArticulo(articulo): Observable<Articulo> {
        return this.http.post<Articulo>(environment.apiURL + articulos, articulo);
    }
}
